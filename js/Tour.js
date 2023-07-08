AFRAME.registerComponent("tour", {
  schema:{
    state:{type:"string",default:"places-list"},
    selectedCard:{type:"string",default:"#card1"}
  },
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },
  tick:function(){
    const {state}=this.el.getAttribute("tour")
    if(state==="view"){
      this.hideEl([this.placesContainer])
      this.showView()
    }
  },
  hideEl:function(elList){
    elList.map(i=>{
      i.setAttribute("visible",false)
    })
  },
  showView:function(){
    const {selectedCard}=this.data
    const sky=document.querySelector("#main-container")
    sky.setAttribute("material",{
      src:`./assets/360_images/${selectedCard}/place-0.jpg`,
      color:"white"
    })
  },
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let X= -60;
    for(var i of thumbNailsRef){
      const posX=X+25
      const posY=10
      const posZ=-40
      const position={x:posX,y:posY,z:posZ}
      X=posX

      const border=this.createBorder(position,i.id)

      const image=this.createImage(i)
      border.appendChild(image)

      const title=this.createTitle(position,i)
      border.appendChild(title)

      this.placesContainer.appendChild(border)
      
    } 

    
  },
  createBorder:function(pos,id){
    const entity=document.createElement("a-entity")
    entity.setAttribute("id",id)
    entity.setAttribute("visible",true)
    entity.setAttribute("position",pos)
    entity.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
    entity.setAttribute("material",{color:"black",opacity:1})
    entity.setAttribute("cursor-listener",{})
    return entity
  },
  createImage:function(i){
    const entity=document.createElement("a-entity")
    entity.setAttribute("visible",true)
    entity.setAttribute("geometry",{primitive:"circle",radius:9})
    entity.setAttribute("material",{src:i.url})
    return entity
  },
  createTitle:function(pos,i){
    const entity=document.createElement("a-entity")
    entity.setAttribute("visible",true)
    const elPos=pos
    elPos.y=-20
    entity.setAttribute("position",elPos)
    entity.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"black",value:i.title})
    return entity
  },
});
