
//1피트는 30.48cm이다

const vertical = 200
const horizontal = 300
const FT = 30.48

//가로길이 300 세로길이 200의 의 필요한 철근을 피트로 바꾸면?
//딱안떨어지고, 소수점으로 떨어지면 올림처리해서 계산해줘야한다.

const price = Math.ceil(((vertical+horizontal)*2/30.48)*3.5)

console.log(`철근으로 유리창을 만드는데 드는 비용은 ${price}달러 입니다.`)

