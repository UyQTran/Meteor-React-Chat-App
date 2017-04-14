const PinGeneratorService = {
    generatePin () {
        return Math.random().toString().substr(2,4);
    }
};

export default PinGeneratorService;