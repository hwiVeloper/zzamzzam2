// 별도 파일로 규칙을 관리하여 추후 변경 추가 삭제가 쉽도록 구성한다.
module.exports = {
  upperCase: {
    // 대문자가 최소 한 글자 이상 포함
    message: "Must have at least one upper-case character",
    pattern: /([A-Z+])/
  },
  lowerCase: {
    // 소문자가 최소 한 글자 이상 포함
    message: "Must have at least one lower-case character",
    pattern: /([a-z]+)/
  },
  special: {
    // 특수문자가최소 한 글자 이상 포함
    message: "Must have at least one special character(!@#$%...)",
    pattern: /([\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~"]+)/
  },
  number: {
    // 숫자가 최소 한 글자 이상 포함
    message: "Must have at least one number",
    pattern: /([0-9]+)/
  },
  over6: {
    // 비밀번호는 6자 이상
    message: "Must be more than 6 characters",
    pattern: /(.{6,})/
  }
};
