var WalletConnectEthereumProvider = function WalletConnectEthereumProvider() {
    return {
        async retrieveProvider() {
            var provider = new window.WalletConnectWeb3Provider({
                infuraId: window.context.infuraNode.substring(window.context.infuraNode.lastIndexOf('/') + 1)
            });

            await provider.enable();
            provider.on('accountsChanged', () => window.onEthereumUpdate(provider));
            provider.on("disconnect",  () => {
                delete window.networkId;
                window.onEthereumUpdate();
            });
            return provider;
        }
    };
}();