self.addEventListener( type: "axios", listener: e => {
    console.log(`Intercepting ${e.request.method} to ${e.request.utl}`)
})