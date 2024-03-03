export const proxyFetch = new Proxy(fetch, {
  apply(target, thisArg, argArray) {
    let [url, cfg] = argArray;

    const requestConfig = {
      ...cfg,
      metadata: { startTime: new Date() },
    };

    return target(url, requestConfig).then((res) => {
      const duration = +new Date() - requestConfig.metadata.startTime;
      console.log(`Response duration: ${duration}ms`);

      return res.json();
    });
  },
});
