import ApiService from './api.service';
export const getCueWords = () => ApiService.get("/cueWords/getCueWords", {
  params:{
      type:'31',
      moudleType : '3'
  }
});
