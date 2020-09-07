import apiUtil from '../Util/apiUtil';

const home={
    menuList(){
        return apiUtil.baseQuery("/test",{a:"testdata"})
    }
}
export default home;