import axios from "axios";

const validateUrl = (
    url: string
): boolean => (/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url))

const API_SERVER_URL = 'https://minifyurl.onrender.com'


export {
    validateUrl,
    API_SERVER_URL,

};