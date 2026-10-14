import json

# TODO: Add requests, BeautifulSoup and LLM extraction logic

def main():
    casinos=[]
    with open('bonuses.json','w') as f:
        json.dump(casinos,f,indent=2)
    print('Generated bonuses.json')

if __name__=='__main__':
    main()
