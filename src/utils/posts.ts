type Category = 'testimonianze' | 'news' | 'raccolta' | 'manifestazioni'
export type Post = {
    id: number
    image: string
    title: string
    text: string
    date: string
    category: Category
    fullDesc?: string
}
export const postsArray: Post[] = [
    {
        id: 1,
        image: '/images/posts/pasqua.jpg',
        title: "Noi di Slava Ukraini Rovigo ringraziamo di cuore tutte le padroncine di casa che hanno contribuito alla causa comune della vendita del dolce pasquale ucraino <Pasha>",
        text: "Vi ringraziamo per il vostro duro lavoro, per le vostre instancabili mani, per la vostra volontà di aiutare non solo con le parole!",
        date: '28.04.2022',
        category: 'news',
        fullDesc:
            "Carissime (e carissimi)!Noi di Slava Ukraini Rovigo ringraziamo di cuore tutte le padroncine di casa che hanno contribuito alla causa comune della vendita del dolce pasquale ucraino <Pasha>.Vi ringraziamo per il vostro duro lavoro, per le vostre instancabili mani, per la vostra volontà di aiutare non solo con le parole!Ringraziamo :Natalia Shadjiy,Monica Shopuk,Natalia Korol,    Veronica Chysjevska,Oksana Sulim,Vita Petliuk,Olenka Mendrygal,Natalia Kuretz,Tamara Boichuk.Tutte noi sappiamo di quanto è stato duro il viaggio! Ma vogliamo condividere con voi la gioia di aver raccolto da entrambe le vendite più di 1400€!!!È un ottimo aiuto per la nostra missione di aiutare i nostri difensori a casa ed i bisognosi per il rifornimento con i medicinali. Più avanti la nostra associazione Vi aggiornerà sull'utilizzo dei fondi raccolti.Da parte mia (Ivanna Kalyta) vorrei sottolineare che la nostra nazione può essere pienamente orgogliosa delle Vostre mani d'oro! E non solo delle mani, ma anche di un cuore gentile, e del Vostro patriottismo dimostrato!Un umile inchino per le nostre eroine che combattono sul loro fronte personale.Gloria all'Ucraina!",
    },
    {
        id: 2,
        image: '/images/posts/manifestazione_Verona.jpg',
        title: "Una bellissima domenica Slava Ukraini Associazione di Volontariato con Malve di Ucraina, Associazione Ucraina a Verona.",
        text: "Cari Ucraini di Rovigo e provincia, grazie di cuore a tutti coloro che hanno potuto unirsi a noi ed essere presenti a Verona alla manifestazione in occasione del Giorno dell'Indipendenza dell'Ucraina.",
        date: '29.08.2022',
        category: 'manifestazioni',
        fullDesc:
            "Una bellissima domenica Slava Ukraini Associazione di Volontariato con Malve di Ucraina, Associazione Ucraina a Verona. Cari Ucraini di Rovigo e provincia, grazie di cuore a tutti coloro che hanno potuto unirsi a noi ed essere presenti a Verona alla manifestazione in occasione del Giorno dell'Indipendenza dell'Ucraina. Sono orgoglioso del fatto che, nonostante tutte le vicende, tu abbia trovato l'opportunità di venire a sostenere i nostri amici-organizzatori. Considero estremamente importante raccontare la storia, le tradizioni e la cultura del popolo ucraino, diffondere e distribuire informazioni informative e informazioni veritiere sulla lotta dell'Ucraina per la sua libertà e indipendenza. Spero che la prossima volta saremo ancora di più. Gloria all'Ucraina",
    },
    {
        id: 3,
        image: '/images/posts/beneficenza.jpg',
        title: "27 Novembre Concerto di beneficenza",
        text: "Speriamo per la pace e la liberta",
        date: '23.10.2022',
        category: 'news',
        fullDesc:
            "27 Novembre Comune di Formignana alle 16:00 presso teatro comunale via mari gruppo Famiglia Unita. Vi presentiamo cultura Ucraina",
    },
    {
        id: 4,
        image: '/images/posts/testimonianza_6_12.jpg',
        title: "Giornata delle Forze Armate dell'Ucraina, i ragazzi",
        text: "I ragazzi di una delle unità delle Forze Operative Speciali (SSO) hanno ricevuto una montatura monolitica fissa Contessa SBT03 che abbiamo acquistato con il vostro aiuto e alcuni altri doni dalla nostra piccola comunità della città di Rovigo.",
        date: '06.12.2022',
        category: 'testimonianze',
        fullDesc:
            "È successo così che proprio oggi, 6 dicembre, in occasione della Giornata delle Forze Armate dell'Ucraina, i ragazzi di una delle unità delle Forze Operative Speciali (SSO) hanno ricevuto una montatura monolitica fissa Contessa SBT03 che abbiamo acquistato con il vostro aiuto e alcuni altri doni dalla nostra piccola comunità della città di Rovigo. Ci congratuliamo con i nostri difensori per le vacanze e ringraziamo tutti coloro che si sono uniti al raduno! Gloria agli eroi!❤️❤️",
    },
    {
        id: 5,
        image: '/images/posts/testinianza_31dic.jpg',
        title: 'I pacchi sono stati raccolti, confezionati e spediti.',
        text: "Grazie di cuore a tutti coloro che hanno risposto e hanno aderito alla raccolta, grazie alla comunità ucraina del comune di San Bellino per gli oggetti raccolti, agli affettuosi ucraini di Rovigo e Lendinara.",
        date: '07.12.2022',
        category: 'testimonianze',
        fullDesc:
            "I pacchi sono stati raccolti, confezionati e spediti. Grazie di cuore a tutti coloro che hanno risposto e hanno aderito alla raccolta, grazie alla comunità ucraina del comune di San Bellino per gli oggetti raccolti, agli affettuosi ucraini di Rovigo e Lendinara. Un sincero ringraziamento al corriere Yanik, che trasporterà i nostri pacchi gratuitamente!",
    },
    {
        id: 6,
        image: '/images/posts/raccolta_barattoli.jpg',
        title: 'Barattoli di latta e di alluminio per la produzione di candele',
        text: "A Rovigo, presso la chiesa di San Bortolo (la porta laterale a destra dall'entrata principale) raccolgono i barattoli di latta e di alluminio per la produzione di candele",
        date: '11.12.2022',
        category: 'raccolta',
        fullDesc:
            "Cari amici, vi ricordo che a Rovigo, presso la chiesa di San Bortolo (la porta laterale a destra dall'entrata principale) raccolgono i barattoli di latta e di alluminio per la produzione di candele a lunga combustione, che servono in Ucraina per scaldarsi, asciugare i panni e per cucinare. I barattoli devono essere puliti e, se possibile, senza le etichette. Sono adatte scatolette di tonno, fagioli, piselli, mais, ecc. Anche le candele, cera e paraffina sono molto necessarie, oppure é possibile lasciare una donazione ai volontari della chiesa per l'acquisto di paraffina. I baratoli possono essere portati in chiesa o lasciati all'ingresso se trovate la porta chiusa. Anche le cose così banali che di solito buttiamo via possono essere utili a qualcuno. Vi ringrazio in anticipo ❤️",
    },
    {
        id: 7,
        image: '/images/posts/manifestazione.jpg',
        title: 'Manifestazione 25/02/2023',
        text: "Invitiamo tutti coloro che sono interessati al destino dell'Ucraina a unirsi a noi per la manifestazione che si terrà a Rovigo (Italia) il 25.02.2023.",
        date: '25.02.2023',
        category: 'manifestazioni',
        fullDesc:
            "Invitiamo tutti coloro che sono interessati al destino dell'Ucraina a unirsi a noi per la manifestazione che si terrà a Rovigo (Italia) il 25.02.2023. Questo evento è dedicato all'anniversario dell'invasione a pieno titolo delle truppe occupazionali russe nel territorio ucraino.Ci incontreremo alle 13.40 in Piazza Matteotti (vicino al parco Due Torri) e alle 14.00 ci muoveremo verso la piazza principale della città, Piazza Vittorio Emanuele II (presso il comune). Insieme onoreremo la memoria delle vittime della guerra, mostreremo il nostro sostegno al popolo ucraino e chiederemo solidarietà internazionale.Vi chiediamo di portare una candela per accenderla durante la preghiera per l'Ucraina e durante il minuto di silenzio per commemorare la memoria dei civili e dei militari morti che si sono schierati per difendere il nostro paese. Se possibile, portate anche un giocattolo per bambini per creare un memoriale in memoria dei bambini morti e feriti durante la guerra.Prego tutta la diaspora ucraina ed altre persone, sensibili alla sorte del popolo ucraino, di unirsi a noi in questo importante evento in modo da aiutare a richiamare l'attenzione del mondo su questo problema e sostenere la lotta per la pace e la libertà. Insieme possiamo rendere il mondo un posto migliore in cui vivere.",
    },
    {
        id: 8,
        image: '/images/posts/manifestazione_Rovigo.jpg',
        title: 'Manifestazione 25.02',
        text: "Grazie a tutta la comunità Ucraina di Rovigo e dintorni e agli amici italiani",
        date: '26.02.2023',
        category: 'manifestazioni',
        fullDesc:
            "Grazie a tutta la comunità Ucraina di Rovigo e dintorni e agli amici italiani che hanno partecipato alla manifestazione dedicata al primo anniversario dell'inizio della guerra totale scatenata dalla Russia contro l'Ucraina. La vostra solidarietà e il vostro sostegno sono stati commoventi e preziosi. Continuiamo a lottare insieme per la pace e la libertà dell'Ucraina. Forza Ucraina!",
    },
    {
        id: 9,
        image: '/images/posts/testimonianza_prelibatezze.jpg',
        title: 'Ringraziamo Maksim Domchuk',
        text: "Le prelibatezze fatte in casa da Maksim Domchuk sono già nelle mani dei nostri difensori",
        date: '01.03.2023',
        category: 'testimonianze',
        fullDesc:
            "Le prelibatezze fatte in casa da Maksim Domchuk sono già nelle mani dei ragazzi della regione di Donetsk. Ringraziamo Maksim e ovviamente ringraziamo i nostri difensori💙💛",
    },
    {
        id: 10,
        image: '/images/posts/testimonianza_Zaporizhia.jpg',
        title: 'Ringrazziamo tutti per la partecipazione',
        text: 'Gli aiuti inviati a Zaporizhzhia hanno raggiunto la destinazione.',
        date: '11.03.2023',
        category: 'testimonianze',
        fullDesc:
            'Gli aiuti inviati a Zaporizhzhia hanno raggiunto la destinazione. Ancora una volta, ringraziamo tutti coloro che si uniscono alle nostre attività e continuano ad aiutare a chi ne ha tanto bisogno',
    },
]

export const getPostsObject = (array: Post[]) =>
    array.reduce(
        (object, post) => ({
            ...object,
            [post.id]: post,
        }),
        {}
    )
