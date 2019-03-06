import axios from 'axios';
import { baseApi } from './index';

const ProjectServices = {
    /** 
     * 获取项目列表
    */
    initProjectList() {
        axios.post('http://pms.58qf.com/project/findListProject').then((data) => {
            console.info(data);
        }).catch((err) => {
            console.info(err);
        })
    }
}

export default ProjectServices;