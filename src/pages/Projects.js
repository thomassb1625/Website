import NavBar from '../utils/NavBar';

const Projects = () => {
    return (
      <main>
        <NavBar selected='projects'/>
        <p className='pl-2 underline'>Prime protocol:</p>
          <li className='pl-4'>Website: <a href='https://app.primeprotocol.xyz/' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>app.primeprotocol.xyz</a></li>
          <li className='pl-4'>Cross-chain lending protocol enabled by plugging into general message passers - specifically Axelar, LayerZero, and Wormhole</li>
          <li className='pl-4'>Role is as backend engineer which has included the following roles:</li>
          <li className='pl-8'>Built out contracts and testing/deployment suite using TypeScript and Hardhat (and lots of it)</li>
          <li className='pl-8'>Created points system using Google Cloud Functions with ethers to track user data and exposing points data as API to frontend</li>
          <li className='pl-8'>Made the Subgraph used by Prime for tracking liquidity incentives</li>
        {/* <p className='pl-2 underline'>Cross-chain liquidation bot:</p>
          <li className='pl-4'>Repo: <a href='https://app.primeprotocol.xyz/' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>app.primeprotocol.xyz</a></li>
          <li className='pl-4'>Cross-chain liquidation bot written using ethers and the SquidRouter (cross-chain DEX) SDK</li>
          <li className='pl-4'>Solo project for Prime, did best to make it configurable so people and plug and play as they please</li>
          <li className='pl-4'>Used combination of on and off chain data to make computations more efficient</li> */}
        <p className='pl-2 underline'>Arbitrage Bot:</p>
          <li className='pl-4'>Repo: <a href='https://app.primeprotocol.xyz/' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>app.primeprotocol.xyz</a></li>
          <li className='pl-4'>Rudimentary MEV bot, had my hand held by much better devs that helped me learn the skills used at Prime</li>
          <li className='pl-4'>Spent most of my time to reading DEX contracts and replicating mathematics in golang so we could calculate arbitrage opportunities</li>
        <p className='pl-2 underline'>Equity derivatives volatility predictor:</p>
          <li className='pl-4'>Repo unfortunately unavailable cause GT was so kind as to wipe my school Github account so you'll just have to take my word on this one</li>
          <li className='pl-4'>Senior project for AI/ML minor at Georgia Tech</li>
          <li className='pl-4'>Scraped and cleaned options data for some big name stocks and used data cleaning and ML techniques to predict volatility (PCA and random forest ended up being best)</li>
          <li className='pl-8'>Theory was if we predict vol better than market, we could make money longing/shorting vol with straddles/strangles</li>
        <p className='pl-2 underline'>Web3 ATL 2022:</p>
          <li className='pl-4'>Website: <a href='https://www.web3atl.io/' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>2022.web3atl.io</a></li>
          <li className='pl-4'>Worked on core team from Blockchain@GT to put together the biggest Web3 conference in ATL to date</li>
          <li className='pl-4'>Techincal "role" was external relations, but we all grinded on everything to get it done</li>
          <li className='pl-4'>Over 50 speakers, 500 attendeees and big name sponsoes including Chainlink, OpenZeppelin, Binance, etc.</li>
        <p className='pl-2 underline'>BTC options vault:</p>
          <li className='pl-4'>Repo: <a href='https://www.web3atl.io/' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>2022.web3atl.io</a></li>
          <li className='pl-4'>Presentation: <a href='Genesis Sales Project.pdf' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>Genesis Sales Project</a></li>
          <li className='pl-4'>Proposed new product for Genesis sales desk (part of overall sales project) made using my newfound derivatives knowledge</li>
          <li className='pl-4'>Thesis is many investors want exposure to BTC without the crazy vol, and my solution was a call-overwriting BTC fund</li>
          <li className='pl-4'>Used some basic pandas and python to backtest what it's performance would've looked like over the past few years</li>
        <p className='pl-2 underline'>BTC gamma hedger:</p>
          <li className='pl-4'>Repo: <a href='https://www.web3atl.io/' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>2022.web3atl.io</a></li>
          <li className='pl-4'>My intro to the derivatives market, some wizards at Genesis helped me learn the ins and outs of Black-Scholes and the Greeks</li>
          <li className='pl-4'>Goal was to optimize the rate that our derivatives desking was rebalancing it's BTC holdings (to rebalance gamma) based on market conditions</li>
          <li className='pl-8'>Rebalance too fast, get eaten alive on trading fees; rebalance too slow, miss out on returns from vol in the interim</li>
          <li className='pl-4'>Used python, pandas, and an ungodly amount of combinations of data from CryptoQuant</li>
        <p className='pl-2 underline'>Institutional DeFi Risk Report:</p>
          <li className='pl-4'>Paper: <a href='DeFi Risk Framework.pdf' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>Baseline Risk Framework for Institutions
            Interacting with DeFi</a></li>
          <li className='pl-4'>Genesis project for researching the risks involved with an institution integratiing into </li>
          <li className='pl-4'>My goal was to give atleast a foundation for actually quantifying the unique risks in DeFi</li>
          <li className='pl-4'>Unfortunately was't fully finished before I got sent to next rotation</li>
        <p className='pl-2 underline'>Mars Lander:</p>
          <li className='pl-4'>Website: <a href='https://www.web3atl.io/' rel='noreferrer' target='_blank' className='hover:underline text-blue-700'>2022.web3atl.io</a></li>
          <li className='pl-4'>My intro to the derivatives market, some wizards at Genesis helped me learn the ins and outs of Black-Scholes and the Greeks</li>
      </main>
    )
};

export default Projects;