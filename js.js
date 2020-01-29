/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function f(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function a(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function e(u){function c(){}function t(e,n,t){if("undefined"!=typeof document){"number"==typeof(t=f({path:"/"},c.defaults,t)).expires&&(t.expires=new Date(1*new Date+864e5*t.expires)),t.expires=t.expires?t.expires.toUTCString():"";try{var o=JSON.stringify(n);/^[\{\[]/.test(o)&&(n=o)}catch(e){}n=u.write?u.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var r="";for(var i in t)t[i]&&(r+="; "+i,!0!==t[i]&&(r+="="+t[i].split(";")[0]));return document.cookie=e+"="+n+r}}function n(e,n){if("undefined"!=typeof document){for(var t={},o=document.cookie?document.cookie.split("; "):[],r=0;r<o.length;r++){var i=o[r].split("="),c=i.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var f=a(i[0]);if(c=(u.read||u)(c,f)||a(c),n)try{c=JSON.parse(c)}catch(e){}if(t[f]=c,e===f)break}catch(e){}}return e?t[e]:t}}return c.set=t,c.get=function(e){return n(e,!1)},c.getJSON=function(e){return n(e,!0)},c.remove=function(e,n){t(e,"",f(n,{expires:-1}))},c.defaults={},c.withConverter=e,c}(function(){})});

/* materiality-typecho-theme dark mode */
var $$=mdui.JQ;
function day(){
    Cookies.set("theme","light",{expires:7}),
    $$("#theme-btn").html("&#xe3a9;"),
    $$("#theme-color").attr("content",Cookies.get("theme-color")),
    $$("body").removeClass("mdui-theme-layout-dark"),
    $$("#appbar").addClass("mdui-color-white"),
    $$(".span").css("color","black")}
function dark(){
    Cookies.set("theme","dark",{expires:7}),
    Cookies.set("theme-color",
    $$("#theme-color").attr("content"),{expires:7}),
    $$("#theme-btn").html("&#xe3ac;"),
    $$("#theme-color").attr("content","#212121"),
    $$("body").addClass("mdui-theme-layout-dark"),
    $$(".span").css("color","white")}
function getexpiretime(){
    var e=new Date(systime.getFullYear(),
    systime.getMonth(),systime.getDate(),6);
    systime.getHours()<=6?Cookies.set("expire",e.getTime(),{expires:7}):Cookies.set("expire",e.getTime()+864e5,{expires:7})}
function changemode(){
    "dark"!=Cookies.get("theme")?dark():day(),
    new Date,getexpiretime(),Cookies.set("manual","1",{expires:7})}
    $$(function(){"dark"==Cookies.get("theme")&&dark();var e=new Date;e.getTime()>Cookies.get("expire")&&Cookies.remove("manual"),
    !Cookies.get("manual")&&e.getTime()>Cookies.get("expire")&&(day(),Cookies.remove("expire")),
    !Cookies.get("manual")&&(20<=e.getHours()||e.getHours()<6)&&(dark(),getexpiretime())});