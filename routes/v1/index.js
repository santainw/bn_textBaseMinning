const express = require('express')
const app = express.Router();
let cheerio = require('cheerio')
//puppeteer "screenshot web"

app.get('/hello', ()=>{
    
    let data = cheerio.load('https://www.agoda.com/th-th/bangkok-midtown-hotel_2/hotel/all/bangkok-th.html?cid=-218&rtab=3038#customer-reviews-panel')
    var companiesList = [];
    data('.list.items .item').each((index, element)=>{
        console.log($('.feedback-warning').text())
    })
    console.log(data('#feedback-warning').text())
    // return data
    // For each .item, we add all the structure of a company to the companiesList array
    // Don't try to understand what follows because we will do it differently.
    // $('.list.items .item').each(function(index, element){
    //     companiesList[index] = {};
    //     var header = $(element).find('.header');
    //     companiesList[index]['name'] = $(header).find('[itemprop=name]').text();
    //     companiesList[index]['description'] = $(header).find('[rel=description]').text();
    //     companiesList[index]['url'] = $(header).find('.header [itemprop=name] a').getAttribute('href');
    //     var contact = $(element).find('.contact');
    //     companiesList[index]['contact'] = {};
    //     companiesList[index]['contact']['telephone'] = $(contact).find('[itemprop=telephone]').text();
    //     companiesList[index]['contact']['employee'] = {};
    //     companiesList[index]['contact']['employee']['name'] = $(contact).find('[itemprop=employeeName]').text();
    //     companiesList[index]['contact']['employee']['jobTitle'] = $(contact).find('[itemprop=employeeJobTitle]').text();
    //     companiesList[index]['contact']['employee']['email'] = $(contact).find('[itemprop=email]').text();
    // });
    //     return 'hello'
})

module.exports = app;