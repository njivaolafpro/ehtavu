
const tasksMock = [
    {
        name: 'MOCKING Préparer le pti dej',
        description: 'Beurre / Tartine / Café',
    },
    {
        name: 'Préparer le Diner',
        description: 'Agneau au four',
    },
    {
        name: 'Finir le projet',
        description: 'deadline fin du mois',
    },
    {
        name: 'Go à CDG',
        description: 'Prendre la voiture ASAP le matin',
    },
    {
        name: 'Ceci est une tâche',
        description: 'Ceci est une description',
    }
];

const getTasks = (req, res) => {
    res.send({ items: tasksMock, error: null })
};

module.exports = { getTasks }
