export class Cancion {

    constructor(
        public _id: String, //public--> modificadores de acceso al atributo y lo dejamos público para que todos los métodos tengan acceso
        public titulo: String,
        public duracion: String,
        public genero: String,
        public artista: String,
        public song: String //cuidado porque en usuario este se llama archivo y a veces lo llamamos mal
    ) {}
}