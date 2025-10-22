/* Simple Service Worker Mock for /api endpoints */
const SAMPLE = {
  analysis: { id: 'mock-analysis-1', status: 'completed', analyzed_by: 'D&R' },
  timeline: [
    {"id":"t1","title":"First Thought","order_index":1,"content":"发生在2023年或更早，客户意识到居住问题（噪音和墙纸发霉）导致需要改善生活，但尚未积极行动","reasoning":"根据访谈内容，客户提到他们在 2023 年或更早就开始意识到居住环境的问题...","reference_ids":[1,2,3]},
    {"id":"t2","title":"Passive looking","order_index":2,"content":"发生在2024年初或更早，客户被动注意到周边楼盘（如散步时观察景高府进度），但未投入精力","reasoning":"客户在访谈中描述了他们在 2024 年初开始无意中注意到周边的房地产项目...","reference_ids":[2,4]},
    {"id":"t3","title":"Event #1","order_index":3,"content":"未提及&客户明确表示没有特定事件触发立即行动，问题积累但无爆发点","reasoning":"在访谈过程中，当问及是否有特定的事件触发了他们的房屋购买决定时...","reference_ids":[1,3]},
    {"id":"t4","title":"Active Looking","order_index":4,"content":"发生在2024年4月，客户积极看房并比较多个楼盘（如金沙湖、融创），投入时间了解细节","reasoning":"客户表示他们在2024年4月开始积极地看房，这是一个重要的转折点...","reference_ids":[4,5]},
    {"id":"t5","title":"Event #2","order_index":5,"content":"发生在2024年4月底，客户得知心仪户型（135平米）售罄，意识到时间紧迫需尽快决策","reasoning":"这是一个关键的触发事件...","reference_ids":[3,5]},
    {"id":"t6","title":"Deciding","order_index":6,"content":"发生在2024年4月底至5月初，客户基于标准（小高层、价格、税收）比较选项后选择景高府","reasoning":"在决策阶段，客户表现出了高度的理性...","reference_ids":[2,4,5]},
    {"id":"t7","title":"Buying","order_index":7,"content":"发生在2024年5月4日，客户支付定金购买景高府房子","reasoning":"在经过了前面的所有阶段后...","reference_ids":[5]},
    {"id":"t8","title":"Consuming","order_index":8,"content":"未进行&房子尚未交付，客户在租房过渡，未开始使用产品","reasoning":"由于房子尚未交付...","reference_ids":[1]},
    {"id":"t9","title":"Satisfaction","order_index":9,"content":"未进行&房子尚未交付，客户未使用产品故无法评估满意度","reasoning":"由于房子尚未交付...","reference_ids":[1]}
  ],
  forces: [
    {"id":"f1","force_type":"Pull","order_index":1,"content":"小高层避免电梯问题；宽敞舒适；税收优惠节省成本；质量好避免渗水风险","reasoning":"吸引力主要来自于新解决方案的积极属性...","reference_ids":[2,5]},
    {"id":"f2","force_type":"Push","order_index":2,"content":"当前住房噪音大；外墙反潮导致墙纸发霉；预计未来问题加剧","reasoning":"推动力来自于对当前住房环境的不满...","reference_ids":[1,4]},
    {"id":"f3","force_type":"Anxiety","order_index":3,"content":"担心周边规划变化（如空地建高楼）；担心物业服务质量跟不上","reasoning":"焦虑主要来自于对新解决方案不确定性的担忧...","reference_ids":[2,4]},
    {"id":"f4","force_type":"Habit","order_index":4,"content":"未提及&用户没有描述习惯当前住房不愿改变的心理","reasoning":"在访谈中，客户并没有表现出对当前住房的依恋...","reference_ids":[1,3]}
  ],
  jobs: [
    {"id":"j1","title":"Struggling moment","content":"当客户住在有噪音和墙纸发霉问题的房子里...（略）","reasoning":"Job Statement 是对客户整个购买旅程的高度概括...","reference_ids":[1,2,3,4,5]}
  ],
  references: [
    {"id":"r1","ref_index":1,"type":"audio","timestamp":"00:05:23","content":"访问者A: ... 噪音真的很大...","source":"音频访谈文件 - 客户访谈记录.mp3"},
    {"id":"r2","ref_index":2,"type":"text","timestamp":null,"content":"在访谈中，客户明确表示对小高层的偏好...","source":"文本记录 - 用户访谈整理.docx"},
    {"id":"r3","ref_index":3,"type":"audio","timestamp":"00:12:45","content":"访问者B: 什么时候开始考虑换房的？...","source":"音频访谈文件 - 客户访谈记录.mp3"},
    {"id":"r4","ref_index":4,"type":"text","timestamp":null,"content":"客户对未来住房问题加剧的担忧主要来自于...","source":"文本记录 - 用户访谈整理.docx"},
    {"id":"r5","ref_index":5,"type":"audio","timestamp":"00:25:10","content":"受访者C: 我们看中的是这个小区的建筑质量...","source":"音频访谈文件 - 客户访谈记录.mp3"}
  ]
};

self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify({
    data,
    meta: { request_id: 'mock-' + Date.now() },
    error: null
  }), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (!url.pathname.startsWith('/api')) return;

  // 路由匹配
  if (event.request.method === 'POST' && url.pathname === '/api/analyses') {
    event.respondWith(jsonResponse({ id: 'mock-analysis-1', status: 'pending' }, 201));
    return;
  }

  if (event.request.method === 'GET' && /^\/api\/analyses\/[^/]+$/.test(url.pathname)) {
    const id = url.pathname.split('/').pop();
    event.respondWith(jsonResponse({ id, status: 'completed', analyzed_by: 'D&R' }));
    return;
  }

  if (event.request.method === 'GET' && /^\/api\/analyses\/[^/]+\/full$/.test(url.pathname)) {
    event.respondWith(jsonResponse(SAMPLE));
    return;
  }

  if (event.request.method === 'GET' && url.pathname === '/api/projects') {
    event.respondWith(jsonResponse([{ id: 'p1', name: '客户访谈-景高府案例', status: 'active' }]));
    return;
  }

  if (event.request.method === 'GET' && /^\/api\/analyses\/[^/]+\/references$/.test(url.pathname)) {
    event.respondWith(jsonResponse(SAMPLE.references));
    return;
  }

  // 默认：未实现的 mock
  event.respondWith(new Response(JSON.stringify({
    data: null,
    meta: { request_id: 'mock-' + Date.now() },
    error: { code: 'NOT_IMPLEMENTED', message: 'Mock not implemented for this endpoint' }
  }), { status: 501, headers: { 'Content-Type': 'application/json; charset=utf-8' } }));
});