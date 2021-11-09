// 입력
const prompt = require('prompt-sync')()
//숫자야구
//배열로 입의의 세자리를 만들고 , 사용자에게 배열 세개를 입력 받아
//임의의 배열과 사용자의 배열의 숫자, 인덱스 자리가 맞으면 스트라이크
//인덱스는 다르고 숫자만 맞으면 볼
//스트라이크가 3개면 게임 종료


const com = []
const user = []

while(true) {
    let strike = 0
    let ball = 0

    while (true) {
        //1부터 10까지의 난수 발생
        const num = parseInt((Math.random() * 10) + 1)

        //배열생성 하여 난수
        //배열의 항목에 없는것을 찾으면 -1을 출력하므로 있는것은 중복되지 않게 넣지말고,
        if (com.indexOf() >= 0) {
            continue
        }
        com.push(num)
        if (com.length === 3) {
            break
        }
    }
    console.log(com)
    while(true) {
        for (let i = 0; i < com.length; i++) {
            user[i] = parseInt(prompt(`1부터10까지의 숫자를 입력하시오`))

            console.log(user)
            //유저의 배열의 값이 있는지 컴퓨터 배열에 있는지 체크해봄
            for (let j = 0; j < user.length; j++) {
                if (com.indexOf(user[j]) >= 0) {
                    if (i === j) {
                        strike++
                        console.log(`맞다 ${strike}`)
                    } else {
                        ball++
                    }
                }
            }
        }
        console.log(`strike =${strike}`)
        if (strike === 3) {
            console.log(`스트라이크아웃!`)
            break
        } else {
            console.log(`${strike} 스트라이크 ${ball}볼!`)
            continue
        }
    }
}
