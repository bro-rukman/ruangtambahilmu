const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const withReactSvg = require('next-react-svg');
const path = require('path');
module.exports=withPlugins([
    withCss({}),
    withImages({}),
    withReactSvg({
        include : path.resolve(__dirname,'./public/images'),
        webpack(config,options){
            return config
        }
    })
]);