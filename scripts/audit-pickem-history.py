"""Reproduce the descriptive audit; usage: python scripts/audit-pickem-history.py games.csv.
Source: https://raw.githubusercontent.com/nflverse/nfldata/master/data/games.csv
Recorded spreads are not historical SZN frozen lines. No strategy backtest claimed.
"""
import csv, sys, math, hashlib
path=sys.argv[1]
rows=[x for x in csv.DictReader(open(path)) if 2015<=int(x["season"])<=2025 and x["game_type"]=="REG" and x["result"] and x["spread_line"]]
last={}; bounce=[]; dogs=[]; favorites=[]
for x in sorted(rows,key=lambda x:(x["gameday"],x["game_id"])):
    m=float(x["result"]); s=float(x["spread_line"])
    if s: favorites.append((m-s)*(1 if s>0 else -1))
    if s<0: dogs.append(m-s)
    for team,margin,ats in [(x["home_team"],m,m-s),(x["away_team"],-m,s-m)]:
        key=(x["season"],team)
        if key in last and last[key]<=-17: bounce.append(ats)
        last[key]=margin
print("source sha256",hashlib.sha256(open(path,"rb").read()).hexdigest(),"games",len(rows))
for label,values in [("favorites",favorites),("home underdogs",dogs),("after loss by 17+",bounce)]:
    w=sum(v>0 for v in values); l=sum(v<0 for v in values); p=len(values)-w-l
    n=w+l; ph=w/n; z=1.96
    c=(ph+z*z/(2*n))/(1+z*z/n)
    d=z*math.sqrt(ph*(1-ph)/n+z*z/(4*n*n))/(1+z*z/n)
    print(label,{"wins":w,"losses":l,"pushes":p,"pct":round(100*ph,2),"approx95Wilson":[round(100*(c-d),1),round(100*(c+d),1)]})
