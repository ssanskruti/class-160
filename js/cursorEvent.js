AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
        this.handleClickEvent()
    },
    handleClickEvent:function(){
        this.el.addEventListener("click",(e)=>{
            const placesContainer=document.querySelector("#places-container")
            const {state}=placesContainer.getAttribute("tour")
            if(state==="places-list"){
                const id=this.el.getAttribute("id")
                const placesId=["taj-mahal","budapest","new-york-city","eiffel-tower"]
                if(placesId.includes(id)){
                    placesContainer.setAttribute("tour",{
                        state:"view",
                        selectedCard:id
                    })
                }
            }
            if(state==="view"){
                this.handleViewState()
            }
            if(state==="change-view"){
                this.handleViewState()
            }
        })
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id=this.el.getAttribute("id")
            const placesId=["taj-mahal","budapest","new-york-city","eiffel-tower"]
            if(placesId.includes(id)){
                const placeContainer=document.querySelector("#places-container")
                placeContainer.setAttribute("cursor-listener",{selectedItemId:id})
                this.el.setAttribute("material",{color:"orange"})
            }
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            if(this.data.selectedItemId){
                const el=document.querySelector(`#${this.data.selectedItemId}`)
                const id=el.getAttribute("id")
                if(id==this.data.selectedItemId){
                    el.setAttribute("material",{color:"black"})
                }
            }
        })
    },
    handleViewState:function(){
        const el=this.el
        const id=el.getAttribute("id")
        const placesContainer=document.querySelector("#places-container")
        const {selectedItemId}=placesContainer.getAttribute("cursor-listener")

        const placesId=["place-1","place-2","place-3","place-4"]
        if(placesId.includes(id)){
            placesContainer.setAttribute("tour",{state:"change-view"})
            const sky=document.querySelector("#main-container")
            sky.setAttribute("material",{src:`./assets/360_images/${selectedItemId}/${id}.jpg`,color:"white"})
        }
    },
})