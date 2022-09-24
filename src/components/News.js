import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Adobe builds collaborative design muscle with $20 bln deal for Figma - Reuters",
            "description": "Adobe Inc will buy startup Figma for about $20 billion in its biggest deal, the Photoshop maker said on Thursday, bulking up on applications that support online collaboration amid a global shift to hybrid working.",
            "url": "https://www.reuters.com/markets/deals/adobe-nearing-deal-buy-online-design-firm-figma-bloomberg-news-2022-09-15/",
            "urlToImage": "https://www.reuters.com/resizer/zJjmg1txoxSSnCk9hllSUnLnvfI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N6BYZGV6LFNRNK2BVFCQA3YL34.jpg",
            "publishedAt": "2022-09-15T16:14:00Z",
            "content": "Sept 15 (Reuters) - Adobe Inc will buy startup Figma for about $20 billion in its biggest deal, the Photoshop maker said on Thursday, bulking up on applications that support online collaboration amid… [+2247 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eurogamer.net"
            },
            "author": "Ishraq Subhan",
            "title": "Sony: \"Giving Microsoft control of Activision games like Call of Duty\" has \"major negative implications\" - Eurogamer.net",
            "description": "UPDATE 5pm UK: In a statement to Eurogamer, a Microsoft spokesperson has addressed Sony's statement: \"It makes zero bus…",
            "url": "https://www.eurogamer.net/sony-giving-microsoft-control-of-activision-games-like-call-of-duty-has-major-negative-implications",
            "urlToImage": "https://assets.reedpopcdn.com/microsoft_1920x1080.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/microsoft_1920x1080.jpg",
            "publishedAt": "2022-09-15T16:05:36Z",
            "content": "UPDATE 5pm UK: In a statement to Eurogamer, a Microsoft spokesperson has addressed Sony's statement: \"It makes zero business sense for Microsoft to remove Call of Duty from PlayStation given its mark… [+1553 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "PFT’s Week 2 2022 NFL picks - NBC Sports",
            "description": "I’m off to an early lead.In Week One, MDS and I disagreed on four games. I went 3-1. That’s an early two game lead.This week, we differ on five of the 16 games.I went 9-6-1. He was 7-8-1. Against the spread, I went 7-9. MDS was 4-12.Scroll through this week’s…",
            "url": "https://profootballtalk.nbcsports.com/2022/09/15/pfts-week-2-2022-nfl-picks/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/09/GettyImages-1237361318-1-e1663257829216.jpg",
            "publishedAt": "2022-09-15T16:05:00Z",
            "content": "Im off to an early lead.\r\nIn Week One, MDS and I disagreed on four games. I went 3-1. Thats an early two game lead.\r\nThis week, we differ on five of the 16 games.\r\nI went 9-6-1. He was 7-8-1. Against… [+7403 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Oliver Darcy",
            "title": "CNN announces it will debut new morning show with Don Lemon, Poppy Harlow, and Kaitlan Collins - CNN",
            "description": "CNN is reimagining its mornings.",
            "url": "https://www.cnn.com/2022/09/15/media/cnn-morning-show/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220915091223-don-lemon-poppy-harlow-kaitlan-collins-split.jpg?q=w_800,c_fill",
            "publishedAt": "2022-09-15T15:49:00Z",
            "content": "CNN is reimagining its mornings.\r\nThe network on Thursday unveiled a new marquee morning program that will debut later this year, anchored by stars Don Lemon, Poppy Harlow, and Kaitlan Collins.\r\nThe … [+3196 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Chris Allen",
            "title": "Fantasy Football 2022: Chargers vs. Chiefs sit/start tips for Week 2 Thursday night football - Yahoo Sports",
            "description": "Fantasy football analyst Chris Allen reveals his lineup advice for the Thursday night matchup between the Los Angeles Chargers and Kansas City Chiefs.",
            "url": "https://sports.yahoo.com/fantasy-football-2022-chargers-vs-chiefs-sitstart-tips-for-week-2-thursday-night-football-154653662.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EQ68nrzCFws1KiFMABbHMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03Nzg-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/fda04630-3454-11ed-befd-e75bcdd0c3c1",
            "publishedAt": "2022-09-15T15:46:53Z",
            "content": "They wrote me off, I aint write back though. What a bar. What a way to cap Week 1 of the fantasy football season. But we were already looking ahead within minutes of Geno Smith dropping the hottest q… [+9035 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sofia Pitt",
            "title": "How to delete duplicate photos with Apple's iOS 16 - CNBC",
            "description": "A new feature of iOS 16 allows you to delete duplicate photos on your iPhone to free up storage space. Here's how to use it.",
            "url": "https://www.cnbc.com/2022/09/15/how-to-delete-duplicate-photos-with-apples-ios-16.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107119165-1663250580692-View_album_Jude__Fenix__Ari.png?v=1663253901&w=1920&h=1080",
            "publishedAt": "2022-09-15T14:58:21Z",
            "content": "Apple's latest iPhone software update, iOS 16, was released Monday. If you're like me and you clutter your Photos app with duplicate pictures, Apple's new software update can help you organize your s… [+723 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Keith Zhai and Thomas Grove",
            "title": "China's Xi Jinping and Russia's Vladimir Putin Showcase Deepening Ties - The Wall Street Journal",
            "description": "At the first meeting between the leaders of Russia and China since Moscow invaded Ukraine, Vladimir Putin said the Kremlin would clarify its position on Ukraine, without explaining further.",
            "url": "https://www.wsj.com/articles/chinas-xi-jinping-and-russias-vladimir-putin-to-showcase-growing-ties-11663243097",
            "urlToImage": "https://images.wsj.net/im-623761/social",
            "publishedAt": "2022-09-15T14:54:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Amy Simonson, Priscilla Alvarez, Devan Cole",
            "title": "DeSantis claims credit for sending 2 planes carrying migrants to Martha's Vineyard in Massachusetts - CNN",
            "description": "Two planes carrying migrants were sent by Florida Gov. Ron DeSantis to Martha's Vineyard on Wednesday night, his office said, infuriating Democratic politicians and prompting a frenzied response that included humanitarian aid by locals and assistance by feder…",
            "url": "https://www.cnn.com/2022/09/14/politics/marthas-vineyard-massachusetts-migrants-planes/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220914222427-01-marthas-vineyard-migrants-arrival-plane.jpg?q=w_800,c_fill",
            "publishedAt": "2022-09-15T14:35:00Z",
            "content": "Two planes carrying migrants were sent by Florida Gov. Ron DeSantis to Marthas Vineyard on Wednesday night, his office said, infuriating Democratic politicians and prompting a frenzied response that … [+5656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": null,
            "title": "Roger Federer announces retirement; 20-time Grand Slam champion will play Laver Cup as final tennis event - ESPN",
            "description": "Roger Federer announced Thursday that he is retiring from tennis after next week's Laver Cup, with the 20-time Grand Slam champion saying on social media that 'I must recognize when it is time to end my competitive career.'",
            "url": "https://www.espn.com/tennis/story/_/id/34596649/roger-federer-announces-retirement-play-laver-cup-final-event",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1117%2Fr938575_1296x729_16%2D9.jpg",
            "publishedAt": "2022-09-15T14:30:32Z",
            "content": "Roger Federer is retiring from professional tennis at age 41 after a series of knee operations, closing a career in which he won 20 Grand Slam titles, finished five seasons ranked No. 1 and helped cr… [+4575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "William and Kate View Flowers at Sandringham - The Royal Family Channel",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTguAu0uByXg",
            "urlToImage": null,
            "publishedAt": "2022-09-15T14:22:20Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Khristopher J. Brooks",
            "title": "Ethereum's \"Merge\" is live — here's what you need to know - CBS News",
            "description": "Crypto enthusiasts say a shift in how ethereum — the second-most popular blockchain — works will revolutionize digital currencies.",
            "url": "https://www.cbsnews.com/news/ethereum-merge-live-blockchain-cbs-news-explains/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2021/10/01/c5e63049-aa8b-41d3-bab0-1441cf05f2ea/thumbnail/1200x630/164f84f89d580d985a64b2c210bc32c3/ethereum-gettyimages-1235570383.jpg",
            "publishedAt": "2022-09-15T14:09:00Z",
            "content": "The cryptocurrency community is abuzz about what could prove to be a landmark event in the burgeoning digital currency world: a major upgrade — dubbed \"the Merge\"— of the ethereum blockchain. Crypto … [+5943 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Max Foster, Lauren Said-Moorhouse",
            "title": "Queen's funeral service to end with two-minute nationwide silence, palace officials say - CNN",
            "description": "A two-minute nationwide silence will be held shortly before the state funeral service for Queen Elizabeth II concludes on Monday, palace officials have revealed.",
            "url": "https://www.cnn.com/2022/09/15/uk/queen-elizabeth-funeral-service-intl-gbr/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220914110024-09-qe2-procession-to-westminster-0914.jpg?q=w_800,c_fill",
            "publishedAt": "2022-09-15T14:06:00Z",
            "content": "A two-minute nationwide silence will be held shortly before the state funeral service for Queen Elizabeth II concludes on Monday, palace officials have revealed.\r\nThe meticulously planned arrangement… [+5497 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "LeBron James, Chris Paul call out NBA over Robert Sarver punishment: 'Our league definitely got this wrong' - CBS Sports",
            "description": "Sarver was suspended one year and fined $10 million, but he was allowed to retain ownership of the Suns",
            "url": "https://www.cbssports.com/nba/news/lebron-james-chris-paul-call-out-nba-over-robert-sarver-punishment-our-league-definitely-got-this-wrong/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/15/652a87a6-d462-436b-8369-08a4a6566d78/thumbnail/1200x675/e675949b4a8f055d6c9e31efdb049e3d/lebron-chris-paul-getty.png",
            "publishedAt": "2022-09-15T13:16:00Z",
            "content": "Los Angeles Lakers star LeBron James weighed in on the Robert Sarver situation on Wednesday, taking to Twitter to issue a brief statement in which he expressed his disappointment in how the league ha… [+3552 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "Apple Watch Series 8 Review - MacRumors",
            "description": "Apple Watch Series 8 and the second-generation Apple Watch SE are set to launch this Friday, September 16, and ahead of time, the first reviews of...",
            "url": "https://www.macrumors.com/review/apple-watch-series-8/",
            "urlToImage": "https://images.macrumors.com/t/XdaV_-3VoCGLtnbfoJldxfrJlPc=/1600x/article-new/2022/09/f1662570472.jpg",
            "publishedAt": "2022-09-15T13:13:05Z",
            "content": "Apple Watch Series 8 and the second-generation Apple Watch SE are set to launch this Friday, September 16, and ahead of time, the first reviews of the devices have now been shared by select media pub… [+3404 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "The Associated Press",
            "title": "6 men arrested in rape, killing of teenage Indian sisters - ABC News",
            "description": "Six men have been arrested in northern India for allegedly raping and killing two teenage girls whose bodies were found hanging from a tree a day earlier",
            "url": "https://abcnews.go.com/International/wireStory/men-arrested-rape-killing-teenage-indian-sisters-89946285",
            "urlToImage": "https://s.abcnews.com/images/International/WireAP_47df6edac4604f42a679d84d0746b6b5_16x9_992.jpg",
            "publishedAt": "2022-09-15T13:02:45Z",
            "content": "LUCKNOW, India -- Six men were arrested Thursday in the northern Indian state of Uttar Pradesh for allegedly raping and killing two teenage girls whose bodies were found hanging from a tree a day ear… [+2487 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Lucy Kafanov and Chuck Johnston, CNN",
            "title": "Judge orders an Iowa teen who killed her alleged rapist to pay his family $150,000 in restitution - CNN",
            "description": "A girl who was 15 when she killed a man she said raped her multiple times must pay his family $150,000 in restitution, an Iowa judge ruled Tuesday.",
            "url": "https://www.cnn.com/2022/09/14/us/iowa-teen-restitution-family-of-alleged-rapist/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220914164115-02-pieper-lewis-sentencing-hearing-super-tease.jpg",
            "publishedAt": "2022-09-15T12:39:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Tanaya Macheel",
            "title": "Stock futures fall slightly ahead of a fresh batch of economic data - CNBC",
            "description": "Investors are looking ahead to several economic reports scheduled for Thursday morning.",
            "url": "https://www.cnbc.com/2022/09/14/stock-market-futures-open-to-close-news.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107118482-1663168399860-gettyimages-1423430315-img_3212_4e4bb03e-26e4-420c-897b-05d25b102c64.jpeg?v=1663192987&w=1920&h=1080",
            "publishedAt": "2022-09-15T12:25:00Z",
            "content": "U.S. equity hovered near the flatline on Thursday morning as investors mulled over several economic reports that showed a muddy picture of the U.S. economy.\r\nFutures tied to the Dow Jones Industrial … [+1552 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Timothy Nerozzi, Tyler Olson",
            "title": "2 migrant buses arrive outside Vice President Kamala Harris' Naval Observatory residence in DC - Fox News",
            "description": "Two buses carrying migrants from Del Rio, Texas, arrived outside Vice President Kamala Harris' residence at the Naval Observatory in Washington, D.C., Thursday.",
            "url": "https://www.foxnews.com/politics/2-migrant-buses-arrive-vice-president-kamala-harris-naval-observatory-residence-dc",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Texas-Migrant-Buses-Kamala-Harris-Residence-2.jpg",
            "publishedAt": "2022-09-15T11:12:14Z",
            "content": "WASHINGTON Two migrant buses from Del Rio, Texas, arrived near Vice President Kamala Harris' residence at the Naval Observatory in Washington, D.C., Thursday morning.\r\nBetween 75 and 100 people who w… [+4579 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WCVB Boston"
            },
            "author": null,
            "title": "5 Investigates: Authorities investigating whether Northeastern University explosion was staged - WCVB Boston",
            "description": "Those sources also told 5 Investigates that the injuries suffered by the employee who reported it were not consistent with wounds typically suffered during an explosion.",
            "url": "https://www.wcvb.com/article/northeastern-university-boston-investigation-sept-14-update/41213196",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/northeastern-university-reported-explosion-response-9-14-2022-1663197109.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2022-09-15T11:11:00Z",
            "content": "BOSTON —Multiple law enforcement sources tell 5 Investigates that authorities are now looking into whether the Northeastern University employee who reported that a Pelican-style case exploded when he… [+4921 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Riley Cardoza",
            "title": "Nick Cannon welcomes surprise ninth baby, his first with Lanisha Cole - Page Six",
            "description": "“I promise to love this little girl with all my heart, regardless what anyone says,” the “Wild ‘N Out” host wrote of his newborn daughter, Onyx.",
            "url": "https://pagesix.com/2022/09/15/nick-cannon-welcomes-ninth-baby-his-first-with-lanisha-cole/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/09/nick-cannon-lanisha-cole-20.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2022-09-15T11:03:00Z",
            "content": "Nick Cannon’s ninth baby has arrived!\r\nThe “Wild ‘N Out” host, 41, surprised his Instagram followers on Thursday with a black-and-white photo of his and Lanisha Cole‘s first child together.\r\n“Introdu… [+2808 chars]"
        }
    ]

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //   console.log(capitalizeFirstLetter('foo')); 
    constructor(props) {
        super(props);
        console.log("Hello Babu.!!!")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
    }
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6351ed25bea54ffdb82cbb69eb721024&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6351ed25bea54ffdb82cbb69eb721024&page=1&pageSize=${this.props.pageSize}`
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // this.setState({articles:parsedData.articles,
        // totalResults:parsedData.totalResults,
        // loading:false
        // }) 
        this.updateNews();

    }
    handlePrevClick = async () => {
        // console.log("Prev btn clicked");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6351ed25bea54ffdb82cbb69eb721024&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // this.setState({
        //     page:this.state.page-1,
        //     articles:parsedData.articles,
        //     loading:false
        // }) 
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }
    handleNextClick = async () => {
        // console.log("Next btn clicked");

        //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6351ed25bea54ffdb82cbb69eb721024&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // this.setState({
        //     page:this.state.page+1,
        //     articles:parsedData.articles,
        //     loading:false
        // }) 
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }
    fetchMoreData = async() => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6351ed25bea54ffdb82cbb69eb721024&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({
            page:this.state.page+1
        })
        // this.setState({ loading: false})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
            // loading: true
        })
      };
    

    render() {
        return (
            <>
                {/* // <div className="container my-3"> */}

                <h2 className="text-center " style={{marginTop:"70px"}} >NewsMonkey---Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container my-5">
                        <div className="row">
                            {/* !this.state.loading && */}
                            {this.state.articles.map((ele) => {
                                return <div className="col-md-4" key={ele.url}>
                                    <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} dateTime={ele.publishedAt} source={ele.source.name} />
                                </div>
                            })};


                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div> */}
            </>
        )
    }
}

export default News
