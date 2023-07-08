AFRAME.registerComponent("place-side-view",{
    init:function(){
        this.createIcons()
    },
    tick:function(){
        const placesContainer=document.querySelector("#places-container")
        const {state}=placesContainer.getAttribute("tour")
        if(state==="view"||state==="change-view"){
            this.el.setAttribute("visible",true)
        }
        else{
            this.el.setAttribute("visible",false)
        }
    },
    createIcons:function(){
        const sideViewContainer=document.querySelector("#side-view-container")
        let xPos=-150
        let yPos=30
        for(var i=1;i<=4;i++){
            const position={x:xPos+=50,y:yPos+=2,z:-40}
            const entity=this.placeIcons(position,i)
            sideViewContainer.appendChild(entity)
        }
    },
    placeIcons:function(position,id){
        const entity=document.createElement("a-entity")
        entity.setAttribute("visible",true)
        entity.setAttribute("id",`place-${id}`)
        entity.setAttribute("geometry",{primitive:"circle",radius:3.5})
        entity.setAttribute("material",{src:"./assets/helicopter.png",opacity:0.9})
        entity.setAttribute("position",position)
        entity.setAttribute("cursor-listener",{})
        return entity
    },
})