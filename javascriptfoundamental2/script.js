//foundamental 2 challenge
const calcAverage = (x,y,z) => (x+y+z)/3

const scoreDolphin = calcAverage(44,23,71)
const scoreKaola = calcAverage(65,54,49)

const checkWinner =function (avgDolphin, avgKaola){
    if(avgDolphin >= 2*avgKaola){
        console.log(`Dolphin wins (${avgDolphin}) vs(${avgKaola})`)
    }else if(avgKaola >= 2*avgDolphin){
        console.log(`kaola wins (${avgKaola}) vs (${avgDolphin})`)
    }else{
        console.log('no team wins')
    }
}
checkWinner(scoreDolphin, scoreKaola)

checkWinner()