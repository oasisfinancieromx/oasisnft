const _ = require('lodash');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/evm-utils');

const app = admin.initializeApp(functions.config().firebase);

Moralis.start({
  apiKey: 'JyHtE35hQeXtdRaG3cBaxlEx7ByXJ8OKyGKSSOVsY9ZxNLZUKeWHM18NpYKRC1kI'
});

const chains = [
  EvmChain.ETHEREUM,
  EvmChain.POLYGON,
  // EvmChain.BSC,
  // EvmChain.AVALANCHE,
  // EvmChain.FANTOM,
  // EvmChain.CRONOS
];

exports.nfts = functions.https.onRequest(async (req, res) => {
  const { addresses } = req.body;
  console.log(addresses);

  const chainsAddressesNfts = await Promise.all(
    _.map(chains, chain => 
      Promise.all(
        _.map(addresses, async (address) => {
          const response = await Moralis.EvmApi.account.getNFTs({ address, chain });
          return response.result;
        })
      )
    )
  );
  const chainNfts = _.flatten(chainsAddressesNfts);
  const nfts = _.flatten(chainNfts);

  res.status(200).send(nfts);
});
