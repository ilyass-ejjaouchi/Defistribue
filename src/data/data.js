import ssh from "../media/ssh.png";
import git from "../media/git.png";
import rest from "../media/rest.png";
import docker from "../media/docker.png";

export const defisList = [
    {
        id: 1,
        image: ssh,
        header: "Defi SSH",
        meta: "SSH API is here",
        description: "Secure Shell est à la fois un programme informatique et un protocole de communication sécurisé. Le protocole de connexion impose un échange de clés de chiffrement en début de connexion. Par la suite, tous les segments TCP sont authentifiés et chiffrés",
        commands: [
            {id: 1, cmd: "# Connexion à une machine distante"},
            {id: 2, cmd: "$ ssh nomMachine@adresseIP"}
        ],
        cle: "ssh@#Defi123",
        errorMsg: null
    },
    {
        id: 2,
        image: git,
        header: "Defi Git",
        meta: "Git is here",
        description: "Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2",
        commands: [
            {id: 1, cmd: "# pour initialiser un repo git taper la command suivante"},
            {id: 2, cmd: "$ git init"},
            {id: 3, cmd: "# pour cloner un projet"},
            {id: 3, cmd: "$ git clone [url]"}
        ],
        cle: "git@**Defi1$"
    },
    {
        id: 3,
        image: rest,
        header: "Defi REST API",
        meta: "REST API is here",
        description: "REST est un style d'architecture logicielle définissant un ensemble de contraintes à utiliser pour créer des services web. Les services web conformes au style d'architecture REST, aussi appelés services web RESTful, établissent une interopérabilité entre les ordinateurs sur Internet.",
        commands: [
            {id: 1, cmd: "# commands REST API"}
        ],
        cle: "git@**Defi1$"
    },
    {
        id: 4,
        image: docker,
        header: "Defi Docker",
        meta: "Docker is here",
        description: "Docker est une plateforme permettant de lancer certaines applications dans des conteneurs logiciels. Selon la firme de recherche sur l'industrie 451 Research, « Docker est un outil qui peut empaqueter une application et ses dépendances dans un conteneur isolé, qui pourra être exécuté sur n'importe quel serveur »",
        commands: [
            {id: 1, cmd: "# commands Docker"}
        ],
        cle: "git@**Defi1$"
    },
    {
        id: 5,
        image: ssh,
        header: "Defi SSH",
        meta: "SSH API is here",
        description: "Secure Shell est à la fois un programme informatique et un protocole de communication sécurisé. Le protocole de connexion impose un échange de clés de chiffrement en début de connexion. Par la suite, tous les segments TCP sont authentifiés et chiffrés",
        commands: [
            {id: 1, cmd: "# commands Docker"}
        ],
        cle: "git@**Defi1$"
    },
    {
        id: 6,
        image: git,
        header: "Defi Git",
        meta: "Git is here",
        description: "Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2",
        commands: [
            {id: 1, cmd: "# commands Docker"}
        ],
        cle: "git@**Defi1$"
    },
    {
        id: 7,
        image: rest,
        header: "Defi REST API",
        meta: "REST API is here",
        description: "REST est un style d'architecture logicielle définissant un ensemble de contraintes à utiliser pour créer des services web. Les services web conformes au style d'architecture REST, aussi appelés services web RESTful, établissent une interopérabilité entre les ordinateurs sur Internet.",
        commands: [
            {id: 1, cmd: "# commands Docker"}
        ],
        cle: "git@**Defi1$"
    },
    {
        id: 8,
        image: docker,
        header: "Defi Docker",
        meta: "Docker is here",
        description: "Docker est une plateforme permettant de lancer certaines applications dans des conteneurs logiciels. Selon la firme de recherche sur l'industrie 451 Research, « Docker est un outil qui peut empaqueter une application et ses dépendances dans un conteneur isolé, qui pourra être exécuté sur n'importe quel serveur »",
        commands: [
            {id: 1, cmd: "# commands Dockerrr"}
        ],
        cle: "git@**Defi1$"
    }
]