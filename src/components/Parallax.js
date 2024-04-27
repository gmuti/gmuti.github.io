import Plx from 'react-plx'

const Parallax = () => {
return (
    <div>
        
    <Plx
        parallaxData={[
        {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
            {
                startValue: 1,
                endValue: 1.8,
                property: 'scale',
            }
            ]
        },
        ]}
        style={{
        position: "fixed",
        left:0,
        top:0,
        width: "100%",
        zIndex:100
        }}
    >
        <img style={{width: "100%"}} src="bbg-final.png" alt="foreground" />
    </Plx>
    <Plx
        parallaxData={[
        {
            start: 0,
            end: 800,
            properties: [
            {
                startValue: 1,
                endValue: 1.18,
                property: 'scale',
            }
            ]
        },
        ]}
        style={{
        position: "fixed",
        left:0,
        top:0,
        width: "100%"
        }}
    >
    <img style={{width: "100%"}} src="ggs.webp" alt="background" />
    </Plx>
    <Plx
        parallaxData={[
            {
            start: 0,
            end: 400,
            properties: [
            {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
            }
            ]
        },
        ]}
        style={{
        position: "fixed",
        left:0,
        top:"15vw",
        width: "100%"
        }}
    >
        <img 
        style={{
            width: "40vw"
            }} 
            src="ggpp2.png" 
            alt="Goonies" 
        />
    </Plx>
    <div
    style={{
        position: "fixed",
        left:0,
        top:0,
        zIndex: 200,
        paddingTop: "56%",
        width: "100%",
        height: "400vh"
    }}
    >
        <div
        style={{
        background: "#000",
        height: "100%"
        }}
        ></div>
    </div>
    </div>
)
}

export default Parallax
