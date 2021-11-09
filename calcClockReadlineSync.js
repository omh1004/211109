const readlineSync = require('readline-sync')


const hour = readlineSync.question("hour?")
const min = readlineSync.question("min?")

//시침은 360도를 기준으로 12등분된다.
const hourD = (360/12)*hour
//분침은 360도를 기준으로 60등분된다.
const minD = (360/60)*min
//시침이 1분당 0.5도씩 더 움직인다.
const hourA = hourD+(min*0.5)
// 180도가 넘으면 360에서 나온 각도를 빼준다.
// 각도가 음수냐 약수냐
// 각도가 180도를 초과하냐
const angle = Math.abs(hourA-minD)

if(angle>180)
{
    console.log(`${hour}시와${min}분의 시침과 분침의 각도는 ${360-(angle)} 입니다.`)
    return
}
    console.log(`${hour}시와${min}분의 시침과 분침의  각도는 ${angle}  입니다.`)


