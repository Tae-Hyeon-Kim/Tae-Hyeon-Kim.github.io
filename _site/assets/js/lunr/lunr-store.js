var store = [{
        "title": "[Jekyll] 블로그 만들기",
        "excerpt":"깃허브 블로그 개설 (chirpy 테마) 저는 블로그 개설하는데에 굉장히 어려움을 겪었는데 어떤 어려움을 겪었는지, 쉽게 하는 방법은 어떤 것인지 설명해보겠습니다! 누구나 그렇듯 저는 블로그를 만들어보겠다는 마음가짐으로 구글링을 통해 정보를 얻었는데, 대부분의 블로그에서 깃허브 repository 만드는 것을 첫 번째로 알려주는 경우가 많습니다. 하지만 저는 그렇게 하다가 어려움을 겪었기 때문에.. 우선 먼저...","categories": ["Blog"],
        "tags": ["Blog","jekyll","Github","Git"],
        "url": "/blog/first-post/",
        "teaser": null
      },{
        "title": "[Dacon] 구내식당 식수 예측",
        "excerpt":"데이콘 실무역량 강화교육을 통해 경험했던 첫 번째 프로젝트에 대한 코드입니다. 코랩을 사용하였고 간단한 EDA를 통해 데이터의 특성을 파악하고 그에 따른 모델을 만들어 식수인원을 예측해보았습니다. from google.colab import drive drive.mount('/content/drive') Drive already mounted at /content/drive; to attempt to forcibly remount, call drive.mount(\"/content/drive\", force_remount=True). import pandas as pd import matplotlib.pyplot as plt...","categories": ["Dacon"],
        "tags": ["python","Dacon","ml"],
        "url": "/dacon/dacon-first/",
        "teaser": null
      },{
        "title": "[Dacon] 와인 품질 분류 경진대회",
        "excerpt":"데이콘 실무역량 강화교육 간에 실시한 프로젝트인 와인분류 프로젝트입니다. 성능 향상을 위해 앙상블기법을 활용해 보았습니다. 또한 하드보팅과 소프트 보팅에 대해 배웠습니다. 0.준비 1) 데이터 로드 from google.colab import drive drive.mount('/content/drive') Drive already mounted at /content/drive; to attempt to forcibly remount, call drive.mount(\"/content/drive\", force_remount=True). import matplotlib.pyplot as plt import pandas as pd...","categories": ["Dacon"],
        "tags": ["python","Dacon","ml"],
        "url": "/dacon/dacon-wine-classifier/",
        "teaser": null
      },{
        "title": "[Dacon] 유전체 정보 분류 경진대회",
        "excerpt":"데이콘 유전체 정보 품종 분류 AI 경진대회 Import import pandas as pd import random import os import numpy as np import matplotlib.pyplot as plt from sklearn import preprocessing from sklearn.ensemble import RandomForestClassifier class CFG: SEED = 42 def seed_everything(seed): random.seed(seed) os.environ['PYTHONHASHSEED'] = str(seed) np.random.seed(seed) seed_everything(CFG.SEED) # Seed 고정 Data Load...","categories": ["Dacon"],
        "tags": ["python","Dacon","ml"],
        "url": "/dacon/dacon-gene/",
        "teaser": null
      },{
        "title": "[Programmers] 이모티콘 할인행사",
        "excerpt":"프로그래머스 이모티콘 할인행사 1. 문제 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/150368 문제 설명이 매우 복잡하게 느껴졌지만 사용자들의 할인율 조건(?)과 이모티콘 플러스를 가입하기 전까지의 한도금액 정보와 이모티콘의 금액 정보를 통해 각 이모티콘의 할인율을 조정하여 이모티콘 플러스의 가입자를 최대한 늘리는 것 이모티콘 판매액을 최대한 늘리는 것 이 두 조건을 만족하는 [이모티콘 플러스의 가입자 수, 이모티콘...","categories": ["Programmers"],
        "tags": ["python","algorithm"],
        "url": "/programmers/programmers-%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98%ED%95%A0%EC%9D%B8%ED%96%89%EC%82%AC/",
        "teaser": null
      },{
        "title": "[Dacon] 여행상품 신청예측",
        "excerpt":"데이콘 Basic 여행상품 신청예측 from google.colab import drive drive.mount('/content/drive') Mounted at /content/drive 0.준비 import pandas as pd train = pd.read_csv('/content/drive/MyDrive/data/여행상품신청/train.csv') test = pd.read_csv('/content/drive/MyDrive/data/여행상품신청/test.csv') sample_submission = pd.read_csv('/content/drive/MyDrive/data/여행상품신청/sample_submission.csv') id : 샘플 아이디 Age : 나이 TypeofContact : 고객의 제품 인지 방법 (회사의 홍보 or 스스로 검색) CityTier : 주거 중인 도시의 등급....","categories": ["Dacon"],
        "tags": ["python","Dacon","ml"],
        "url": "/dacon/prediction-of-trevel-product/",
        "teaser": null
      },{
        "title": "[Programmers] 네트워크",
        "excerpt":"프로그래머스 코팅테스트 연습문제를 푸는 과정에서 굉장히 깔끔하게 풀린 문제가 있어서 풀이과정을 공유하고자 작성하게 되었다! 1. 문제 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/43162 먼저 입력은 컴퓨터의 개수 n 과 컴퓨터 간 연결 관계에 대한 리스트 computers 가 주어지고 두 정보를 이용하여 네트워크의 개수 즉, 컴퓨터가 몇 묶음으로 연결되어있는지를 출력해야 한다. 2. 접근 방법 이...","categories": ["Programmers"],
        "tags": ["python","algorithm","dfs/bfs"],
        "url": "/programmers/programmers-network/",
        "teaser": null
      }]
