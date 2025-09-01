const payload = {
  toggles: [
    { name: "skywars", enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "kitpvp",  enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "pvp",     enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "eggwars2",enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "duels_bridge", enabled: true, variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "require_account_for_creating_planets", enabled: true, variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "eggwars4",enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "ads",     enabled: true, variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "spleef",  enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "oitq",    enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "murder",  enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "blockhunt",    enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "eggwars",  enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "eggwars3",    enabled: true,  variant: { name: "disabled", enabled: false }, impressionData: false },
    { name: "blitzbuild", enabled: true, variant: { name: "disabled", enabled: false }, impressionData: false }
  ]
};

const rule = {
  id: 1001,
  priority: 1,
  action: {
    type: "redirect",
    redirect: { url: "data:application/json," + encodeURIComponent(JSON.stringify(payload)) }
  },
  condition: {
    urlFilter: "https://unleash.miniblox.io/api/frontend?sessionId=",
    resourceTypes: ["xmlhttprequest"],
    initiatorDomains: ["miniblox.io","miniblox.online"],
    isUrlFilterCaseSensitive: false
  }
};

function installRule() {
  chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [rule.id], addRules: [rule] });
}
chrome.runtime.onInstalled.addListener(installRule);
chrome.runtime.onStartup.addListener(installRule);
