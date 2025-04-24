import Stripe from "./Stripe"

const Stripes = () => {
  var data = [
    {
      url: "https://imgs.search.brave.com/EierNWlRax6vqTHj6rzM-KFxMBOJsm9PVw2R2g4bOT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMTkt/MDMtMDAzNS1oLXJh/eS1iYW4tbG9nby0x/Ny5wbmc", number: 48
    },
    {
      url: "https://imgs.search.brave.com/EierNWlRax6vqTHj6rzM-KFxMBOJsm9PVw2R2g4bOT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMTkt/MDMtMDAzNS1oLXJh/eS1iYW4tbG9nby0x/Ny5wbmc", number: 2
    },
    {
      url: "https://imgs.search.brave.com/EierNWlRax6vqTHj6rzM-KFxMBOJsm9PVw2R2g4bOT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMTkt/MDMtMDAzNS1oLXJh/eS1iYW4tbG9nby0x/Ny5wbmc", number: 11
    },
    {
      url: "https://imgs.search.brave.com/EierNWlRax6vqTHj6rzM-KFxMBOJsm9PVw2R2g4bOT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMTkt/MDMtMDAzNS1oLXJh/eS1iYW4tbG9nby0x/Ny5wbmc", number: 48
    },
    {
      url: "https://imgs.search.brave.com/EierNWlRax6vqTHj6rzM-KFxMBOJsm9PVw2R2g4bOT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMTkt/MDMtMDAzNS1oLXJh/eS1iYW4tbG9nby0x/Ny5wbmc", number: 2
    },
    {
      url: "https://imgs.search.brave.com/EierNWlRax6vqTHj6rzM-KFxMBOJsm9PVw2R2g4bOT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMTkt/MDMtMDAzNS1oLXJh/eS1iYW4tbG9nby0x/Ny5wbmc", number: 11
    },

  ]
  return (
    <div className="flex items-center mt-20">
      {data.map((elem, index) => {
        return <Stripe key={index} val={elem} />
      })}
    </div>
  )
}

export default Stripes