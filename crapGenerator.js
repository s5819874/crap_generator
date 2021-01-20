function sample(array) {
  const ranIndex = Math.floor(Math.random() * array.length)
  return array[ranIndex]
}

function showCrap(option) {

  //define elements
  const task = {
    工程師: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    設計師: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    創業家: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']



  //check if choice exists and create the whole sentence
  if (typeof (option.job) != "string") {
    return "請選擇一種身份"
  } else {
    let crap = `身為一個${option.job}，${sample(task[option.job])}，${sample(phrase)}吧!`
    return crap
  }

}

module.exports = showCrap
