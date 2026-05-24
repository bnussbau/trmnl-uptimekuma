function transform(input) {
  const statusPage = input.IDX_0 || {};
  const heartbeatData = input.IDX_1 || {};

  const publicGroupList = [];
  (statusPage.publicGroupList || []).forEach(function (group) {
    const monitorList = [];

    (group.monitorList || []).forEach(function (monitor) {
      const slimMonitor = {
        id: monitor.id,
        name: monitor.name,
        validCert: !!monitor.validCert,
        tags: monitor.tags || [],
      };

      monitorList.push(slimMonitor);
    });

    publicGroupList.push({
      id: group.id,
      name: group.name,
      weight: group.weight,
      monitorList: monitorList,
    });
  });

  const heartbeatList = {};
  Object.keys(heartbeatData.heartbeatList || {}).forEach(function (heartbeatId) {
    const heartbeatItems = heartbeatData.heartbeatList[heartbeatId] || [];
    const slimHeartbeats = [];

    for (let index = Math.max(heartbeatItems.length - 16, 0); index < heartbeatItems.length; index += 1) {
      const heartbeat = heartbeatItems[index];
      slimHeartbeats.push({
        status: heartbeat.status,
        ping: heartbeat.ping,
      });
    }

    heartbeatList[heartbeatId] = slimHeartbeats;
  });

  const uptimeList = {};
  Object.keys(heartbeatData.uptimeList || {}).forEach(function (uptimeKey) {
    uptimeList[uptimeKey] = heartbeatData.uptimeList[uptimeKey];
  });

  const incidents = [];
  (statusPage.incidents || []).forEach(function (incident) {
    incidents.push({
      title: incident.title,
      content: incident.content,
    });
  });
  const incident = incidents.length > 0 ? incidents[0] : null;

  return {
    IDX_0: {
      config: statusPage.config || {},
      publicGroupList: publicGroupList,
      incidents: incidents,
    },
    IDX_1: {
      heartbeatList: heartbeatList,
      uptimeList: uptimeList,
    },
  };
}