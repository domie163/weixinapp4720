const base = {
    get() {
        return {
            url : "http://localhost:8080/django4xa3d/",
            name: "django4xa3d",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "童心党史小程序"
        } 
    }
}
export default base
