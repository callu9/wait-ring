const storage = {
  user: {
    id: "user01",
    nickname: "유저01",
    newAlarm: 1,
    wait: 6,
    reserve: 2,
    review: 4,
    point: 2626,
  },
  storeData: [
    {
      id: 1,
      name: "고든램지 버거",
      areaDong: "신천동",
      imageUrl:
        "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2FHypebeast-check-gordon-ramsay-burger-korean-restaurant-info-22.jpg?w=1600&cbr=1&q=90&fit=max",
      review: "4.8",
      liked: 1326,
      keyword: ["양식", "버거"],
      waitingFlag: true,
      reservationFlag: false,
    },
    {
      id: 2,
      name: "호랑이식당 롯데영등포점",
      areaDong: "영등포동",
      imageUrl: "https://www.withbuyer.com/news/photo/202101/20946_11658_1837.jpg",
      review: "4.3",
      liked: 26,
      keyword: ["일식", "라멘"],
      waitingFlag: true,
      reservationFlag: true,
    },
    {
      id: 3,
      name: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      imageUrl: "https://t1.daumcdn.net/cfile/tistory/252170375909AB6931",
      review: "4.0",
      liked: 27,
      keyword: ["일식", "함바그"],
      waitingFlag: true,
      reservationFlag: true,
    },
    {
      id: 4,
      name: "별미곱창",
      areaDong: "방이동",
      imageUrl:
        "https://mp-seoul-image-production-s3.mangoplate.com/209802/83465_1631076696663_63542?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
      review: "4.2",
      liked: 26,
      keyword: ["한식", "곱창", "술안주"],
      waitingFlag: false,
      reservationFlag: false,
    },
    {
      id: 5,
      name: "우미노미",
      areaDong: "당산동",
      imageUrl:
        "https://mp-seoul-image-production-s3.mangoplate.com/sources/web/restaurants/405162/894765_1640500466267",
      review: "4.7",
      liked: 26,
      keyword: ["일식", "돈부리"],
      waitingFlag: false,
      reservationFlag: false,
    },
    {
      id: 6,
      name: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      imageUrl: "https://t1.daumcdn.net/cfile/tistory/252170375909AB6931",
      review: "4.3",
      liked: 26,
      keyword: ["일식", "키워드"],
      waitingFlag: false,
      reservationFlag: false,
    },
  ],
  reviewData: [
    {
      id: 1,
      name: "호랑이식당 롯데영등포점",
      areaDong: "영등포동",
      review: "4.8",
      reviewContent: "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
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
  storeDetail: [
    {
      id: 1,
      name: "고든램지버거",
      areaDong: "신천동",
      areaDetail: "서울 송파구 올림픽로 300 롯데월드몰 B1층",
      review: 4.8,
      reviewNum: 2626,
      liked: 1326,
      keywords: ["프리미엄", "양식", "버거"],
      openTime: "10:00",
      closeTime: "20:30",
      closeDay: "매달 셋째주 월요일",
      images: [
        "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2FHypebeast-check-gordon-ramsay-burger-korean-restaurant-info-22.jpg?w=1600&cbr=1&q=90&fit=max",
        "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F11%2FGordon-ramsay-burger-korean-open-date-official-info-02.jpg?q=75&w=800&cbr=1&fit=max",
        "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2FHypebeast-check-gordon-ramsay-burger-korean-restaurant-info-23.jpg?w=1600&cbr=1&q=90&fit=max",
      ],
      menus: [
        {
          id: 1,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F11%2FGordon-ramsay-burger-korean-open-date-official-info-02.jpg?q=75&w=800&cbr=1&fit=max",
        },
        {
          id: 2,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2FHypebeast-check-gordon-ramsay-burger-korean-restaurant-info-23.jpg?w=1600&cbr=1&q=90&fit=max",
        },
        {
          id: 3,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl: "https://blog.kakaocdn.net/dn/rB0Wj/btrapGjFjND/5zK1gXkq5Hsm24n4yE6lvk/img.jpg",
        },
      ],
      reviews: [
        {
          id: 1,
          review: "3.0",
          reviewContent: "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
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
          reviewContent: "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
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
      id: 3,
      name: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      areaDetail: "서울특별시 노원구 동일로 1414",
      review: "4.0",
      reviewNum: 2626,
      liked: 27,
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
          imageUrl: "https://photo.akmall.com/image4/goods/78/32/74/79/78327479_M_350.jpg",
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
          reviewContent: "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
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
      id: 4,
      name: "별미곱창",
      areaDong: "방이동",
      areaDetail: "서울특별시 송파구 올림픽로32길 22",
      review: 4.2,
      reviewNum: 2626,
      liked: 26,
      keywords: ["한식", "곱창", "안주"],
      openTime: "11:00",
      closeTime: "05:00",
      closeDay: "매주 일요일",
      images: [
        "https://mp-seoul-image-production-s3.mangoplate.com/209802/83465_1631076696663_63542?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
        "https://mp-seoul-image-production-s3.mangoplate.com/1250968_1651396898827190.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
        "https://mp-seoul-image-production-s3.mangoplate.com/1272306_1606457666085316.jpg",
      ],
      menus: [
        {
          id: 1,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://mp-seoul-image-production-s3.mangoplate.com/209802/83465_1631076696663_63542?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
        },
        {
          id: 2,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://mp-seoul-image-production-s3.mangoplate.com/2091186_1640675023029693.jpg",
        },
        {
          id: 3,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://mp-seoul-image-production-s3.mangoplate.com/1272306_1606457666085316.jpg",
        },
      ],
      reviews: [
        {
          id: 1,
          review: "3.0",
          reviewContent: "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
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
      id: 5,
      name: "우미노미",
      areaDong: "당산동",
      areaDetail: "서울특별시 영등포구 당산로 180 신우빌딩 1F",
      review: 4.7,
      reviewNum: 2626,
      liked: 26,
      keywords: ["일식", "돈부리", "벤또"],
      openTime: "11:30",
      closeTime: "20:00",
      closeDay: "매주 월요일, 일요일",
      images: [
        "https://mp-seoul-image-production-s3.mangoplate.com/sources/web/restaurants/405162/894765_1640500466267",
        "https://mp-seoul-image-production-s3.mangoplate.com/405162/513273_1597229296822_10244",
        "https://mp-seoul-image-production-s3.mangoplate.com/sources/web/restaurants/405162/894765_1640500463779",
      ],
      menus: [
        {
          id: 1,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://mp-seoul-image-production-s3.mangoplate.com/sources/web/restaurants/405162/894765_1640500466267",
        },
        {
          id: 2,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://mp-seoul-image-production-s3.mangoplate.com/405162/513273_1597229296822_10244",
        },
        {
          id: 3,
          name: "메뉴명",
          price: 15000,
          detail:
            "메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. 메뉴 설명입니다. ",
          imageUrl:
            "https://mp-seoul-image-production-s3.mangoplate.com/405162/28187_1644025957736_36198",
        },
      ],
      reviews: [
        {
          id: 1,
          review: "3.0",
          reviewContent: "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
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
      id: 6,
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
          imageUrl: "https://photo.akmall.com/image4/goods/78/32/74/79/78327479_M_350.jpg",
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
          reviewContent: "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
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
  waitingData: {
    storeName: "고든램지버거",
    storeId: 1,
    storeLocation: { lat: 37.5133093, lng: 127.1015865 },
    waitingNum: 4,
    waitingBefore: 3,
    adult: 2,
    child: 1,
    status: 0,
  },
  reservationData: {
    storeName: "호랑이식당 롯데영등포점",
    storeId: 2,
    storeLocation: { lat: 37.5158794, lng: 126.9077981 },
    reserveDate: "2022.00.00(월) 00:00",
    adult: 2,
    child: 0,
    status: 1,
  },
  EtcWaitingDetail: [],
  EtcReservationDetail: [],
  EtcReviewDetail: [
    {
      id: 1,
      storeId: 1,
      storeName: "고든램지버거",
      areaDong: "신천동",
      review: "4.8",
      reviewContent: "리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. 리뷰입니다. ",
      nickname: "유저01",
      timestamp: "1시간 전",
      imageUrl: ["https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/06/111127140.2.jpg"],
    },
    {
      id: 2,
      storeId: 2,
      storeName: "호랑이식당 롯데영등포점",
      areaDong: "영등포동",
      review: "4.1",
      reviewContent:
        "리뷰인데용. 리뷰인데용. 리뷰인데용. 리뷰인데용. 리뷰인데용. 리뷰인데용. 리뷰인데용. ",
      nickname: "유저01",
      timestamp: "1일 전",
    },
    {
      id: 3,
      storeId: 3,
      storeName: "후쿠오카함바그 롯데백화점노원",
      areaDong: "상계동",
      review: "3.6",
      reviewContent:
        "내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 내용입니다용 ",
      nickname: "유저01",
      timestamp: "3일 전",
    },
  ],
};

export default storage;
