import $ from 'jquery'
// 封装版
export const IP = 'paile8.com'
export const PORT = '80'
export const base_uploadUrl = 'http://image-paile.paile8.com'
export let promiseAjax = (url, data,header = "") => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'POST',
      url,
      data,
      header:"",
      success: (res) => {
        resolve(res)
      },
      error: (err) => {
        reject(err);
      },
      dataType: 'json'
    });
  })
}
