import React from 'react'


export default class AlgaeMinimap extends React.Component {

    constructor(props){
        super(props)

        //Props: 
        // background
        // percent
        this.state = {
            canvasWidth: 1,
            canvasHeight: 1,
        }

        this.canvasWaterMask = null
    }

    componentDidMount(){
        this.drawCanvas()
    }

    componentDidUpdate(){
        this.drawCanvas()
    }

    createWaterMask(ctx){
        let osc = new OffscreenCanvas(this.state.canvasWidth, this.state.canvasHeight)
        let oscCtx = osc.getContext("2d")
        oscCtx.fillStyle = 'rgba(0, 0, 0, 255)'
        oscCtx.beginPath()
        oscCtx.arc(Math.floor(osc.width / 2), Math.floor(osc.height / 2), 0, Math.PI * 2, true)
        oscCtx.fill()
        let srcImageData = ctx.getImageData(0, 0, osc.width, osc.height)
        let dstImageData = oscCtx.getImageData(0, 0, osc.width, osc.height)
        for(let x = 0; x < osc.width; x ++){
            for(let y = 0; y < osc.height; y++){
                let coord = ((y * (osc.width)) + x) * 4;
                if(srcImageData.data[coord] === 0xaa && srcImageData[coord + 1] == 0xda && srcImageData[coord + 2] == 0xff){
                    dstImageData[coord] = 0x0d
                    dstImageData[coord + 1] = 0x56
                    dstImageData[coord + 2] = 0x06
                }else{
                    dstImageData[coord + 3] = 0
                }
            }
        }
        oscCtx.putImageData(oscCtx, 0, 0)
    }

    drawCanvas(){
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        if(img.width){
            ctx.drawImage(img, 0, 0)
            if(typeof window.OffscreenCanvas !== "undefined"){
                let canvasMask = this.createWaterMask(ctx)
                ctx.drawImage(canvasMask, 0, 0)
            }
        }else{
            img.onload = () => {
                if(img.width !== this.state.canvasWidth || img.height !== this.state.canvasHeight){
                    this.setState({
                        canvasWidth: img.width,
                        canvasHeight: img.height
                    })
                    return
                }
                this.drawCanvas()
            }
        }
    }

    render(){
        

        return (
            <div style={{ padding: 20 }}>
                <canvas ref="canvas" width={this.state.canvasWidth} height={this.state.canvasHeight} style={{width: "100%", height: "100%"}}></canvas>
                <div style={{ width: 1, height: 1, overflow: "hidden"}}>
                    <img ref="image" src={this.props.background} style={{visibility: "hidden"}} />
                </div>
            </div>
        )
    }
}

