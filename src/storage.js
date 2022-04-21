const storage = {
  storeData: [
    {
      id: 1,
      name: "호랑이식당 롯데영등포점",
      areaDong: "영등포동",
      imageUrl:
        "https://www.withbuyer.com/news/photo/202101/20946_11658_1837.jpg",
      review: "4.3",
    },
    {
      id: 2,
      name: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      imageUrl: "https://t1.daumcdn.net/cfile/tistory/252170375909AB6931",
      review: "4.0",
    },
    {
      id: 3,
      name: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      imageUrl: "https://t1.daumcdn.net/cfile/tistory/252170375909AB6931",
      review: "4.0",
    },
    {
      id: 4,
      name: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      imageUrl: "https://t1.daumcdn.net/cfile/tistory/252170375909AB6931",
      review: "4.0",
    },
  ],
  reviewData: [
    {
      id: 1,
      name: "호랑이식당 롯데영등포점",
      areaDong: "영등포동",
      review: "4.8",
      reviewContent:
        "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
      nickname: "닉네임",
    },
    {
      id: 2,
      name: "호랑이식당 롯데영등포점",
      areaDong: "영등포동",
      review: "4.1",
      reviewContent:
        "리뷰인데용. 리뷰인데용. 리뷰인데용. 리뷰인데용. 리뷰인데용. 리뷰인데용. 리뷰인데용. ",
      nickname: "닉네임",
    },
    {
      id: 3,
      name: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      review: "3.6",
      reviewContent:
        "내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 ",
      nickname: "닉네임",
    },
  ],
  user: [
    {
      id: "user01",
      nickname: "유저01",
      wait: 6,
      reserve: 2,
      review: 4,
      point: 2626,
    },
  ],
  storeDetail: [
    {
      id: 1,
      name: "호랑이식당 롯데영등포점",
      areaDong: "영등포동",
      areaDetail: "서울특별시 영등포구 경인로 846 1층",
      review: 4.3,
      reviewNum: 2626,
      liked: 26,
      keywords: ["깨끗한", "일식", "라멘"],
      openTime: "10:00",
      closeTime: "20:30",
      closeDay: "매달 셋째주 월요일",
      images: [
        "https://www.withbuyer.com/news/photo/202101/20946_11658_1837.jpg",
        "https://fastly.4sqi.net/img/general/600x600/1031332_xMRWHJI6gyx67OWao007x9QJHCRrwZXtvVikBSWLnZs.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCsNulDAFudjACXelVM748SzRVsIQW2-MNQ&usqp=CAU",
      ],
      menus: [
        {
          id: 1,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://fastly.4sqi.net/img/general/600x600/1031332_xMRWHJI6gyx67OWao007x9QJHCRrwZXtvVikBSWLnZs.jpg",
        },
        {
          id: 2,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCsNulDAFudjACXelVM748SzRVsIQW2-MNQ&usqp=CAU",
        },
        {
          id: 3,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://d12zq4w4guyljn.cloudfront.net/300_300_20211127100617_photo4_c7a7c577ce7a.jpg",
        },
      ],
      reviews: [
        {
          id: 1,
          review: "3.0",
          reviewContent:
            "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
          nickname: "닉네임",
          timestamp: "1시간 전",
        },
        {
          id: 2,
          review: "4.8",
          reviewContent:
            "리뷰입니다. :) 리뷰입니다. :) 리뷰입니다. :) 리뷰입니다. :) 리뷰입니다. :) 리뷰입니다. :)",
          nickname: "닉네임",
          timestamp: "1시간 전",
        },
        {
          id: 3,
          review: "4.3",
          reviewContent:
            "내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 ",
          nickname: "닉네임",
          timestamp: "1시간 전",
        },
      ],
    },
    {
      id: 2,
      name: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      areaDetail: "서울특별시 노원구 동일로 1414",
      review: 4.3,
      reviewNum: 2626,
      liked: 26,
      keywords: ["깨끗한", "일식", "라멘"],
      openTime: "10:00",
      closeTime: "20:30",
      closeDay: "매달 셋째주 월요일",
      images: [
        "https://t1.daumcdn.net/cfile/tistory/252170375909AB6931",
        "https://www.gimhae.go.kr/CmsMultiFile/view.do?multifileId=MF00002744&idx=15896&s=800x800",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6awLHGWLGuC7HDu80-FZBtwWW9-WIwOW0RQ&usqp=CAU",
      ],
      menus: [
        {
          id: 1,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAmGxad5NjtCXj6MupWPg-jBQpxsP6MMDoxDzmCYxT1GfJwwPeAnvijP7UzvrdpYGuoE&usqp=CAU",
        },
        {
          id: 2,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://photo.akmall.com/image4/goods/78/32/74/79/78327479_M_350.jpg",
        },
        {
          id: 3,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7NTqm9Yet_q0V1b6kOF1RLBAfQDM1BY-IqXPb4v41Ot2MIg-gIqGqUIRySgA632jPQ8&usqp=CAU",
        },
      ],
      reviews: [
        {
          id: 1,
          review: "3.0",
          reviewContent:
            "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
          nickname: "닉네임",
          timestamp: "1시간 전",
        },
        {
          id: 2,
          review: "4.8",
          reviewContent:
            "리뷰입니다. :) 리뷰입니다. :) 리뷰입니다. :) 리뷰입니다. :) 리뷰입니다. :) 리뷰입니다. :)",
          nickname: "닉네임",
          timestamp: "1시간 전",
        },
        {
          id: 3,
          review: "4.3",
          reviewContent:
            "내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 ",
          nickname: "닉네임",
          timestamp: "1시간 전",
        },
      ],
    },
  ],
};

export default storage;
