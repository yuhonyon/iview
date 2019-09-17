const zindexManager={
    zindex:2000,
    nextZIndex(zindex){
        if(parseInt(zindex,10)>zindex){
            return zindex;
        }
        return this.zindex++;
    }
};

export default zindexManager;
