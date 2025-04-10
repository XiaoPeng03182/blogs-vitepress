const oa_name = "小鹏-XiaoPeng";
const oa_description = "分享技术,记录生活";
const web_beian = "渝ICP备2025054279号";

function replaceText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
      element.innerText = newText;
  } else {
      console.log("Element with ID '" + elementId + "' not found.");
  }
}

replaceText('wechatOA-name', oa_name);
replaceText('wechatOA-description', oa_description)
replaceText('web-beian', web_beian)