

  //替换 api 参数值 用小括号包住， 如: /api/(id)
  function changeApiParam(value) {
    var rt = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(value);
    return rt[2]
  }

export {
    changeApiParam
}