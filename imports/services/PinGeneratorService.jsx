
const PinGeneratorService = {
    generatePin () {
        const min = 0, max = 9999;
        return Math.random().toString().substr(2,4);
    }
};

export default PinGeneratorService;