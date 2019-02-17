export const CafeIsRoasterFilter={
    methods:{
        processCafeIsRoasterFilter(cafe){
            if(cafe.roaster ===1 ){
                return true;
            }else{
                return false;
            }
        }
    }
}