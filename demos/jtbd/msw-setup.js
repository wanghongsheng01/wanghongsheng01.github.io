/* Lightweight alternative mock in 'msw' mode: fetch interceptor without external libs.
   If this script loads, it will intercept /api/* and return mock data similar to SW.
   To enable: set window.mockMode='msw' before page load (or in console), then refresh.
*/
(function () {
  try {
    const SAMPLE = {
      analysis: { id: 'mock-analysis-1', status: 'completed', analyzed_by: 'D&R' },
      timeline: [
        {"id":"t1","title":"First Thought","order_index":1,"content":"发生在2023年或更早，客户意识到居住问题（噪音和墙纸发霉）导致需要改善生活，但尚未积极行动","reasoning":"...","reference_ids":[1,2,3]},
        {"id":"t2","title":"Passive looking","order_index":2,"content":"发生在2024年初或更早...","reasoning":"...","reference_ids":[2,4]},
        {"id":"t3","title":"Event #1","order_index":3,"content":"未提及&客户明确表示没有特定事件触发...","reasoning":"...","reference_ids":[1,3]},
        {"id":"t4","title":"Active Looking","order_index":4,"content":"发生在2024年4月，客户积极看房...","reasoning":"...","reference_ids":[4,5]},
        {"id":"t5","title":"Event #2","order_index":5,"content":"发生在2024年4月底...","reasoning":"...","reference_ids":[3,5]},
        {"id":"t6","title":"Deciding","order_index":6,"content":"发生在2024年4月底至5月初...","reasoning":"...","reference_ids":[2,4,5]},
        {"id":"t7","title":"Buying","order_index":7,"content":"发生在2024年5月4日...","reasoning":"...","reference_ids":[5]},
        {"id":"t8","title":"Consuming","order_index":8,"content":"未进行&房子尚未交付...","reasoning":"...","reference_ids":[1]},
        {"id":"t9","title":"Satisfaction","order_index":9,"content":"未进行&房子尚未交付...","reasoning":"...","reference_ids":[1]}
      ],
      forces: [
        {"id":"f1","force_type":"Pull","order_index":1,"content":"小高层避免电梯问题...","reasoning":"...","reference_ids":[2,5]},
        {"id":"f2","force_type":"Push","order_index":2,"content":"当前住房噪音大...","reasoning":"...","reference_ids":[1,4]},
        {"id":"f3","force_type":"Anxiety","order_index":3,"content":"担心周边规划变化...","reasoning":"...","reference_ids":[2,4]},
        {"id":"f4","force_type":"Habit","order_index":4,"content":"未提及&用户没有描述...","reasoning":"...","reference_ids":[1,3]}
      ],
      jobs: [
        {"id":"j1","title":"Struggling moment","content":"当客户住在有噪音和墙纸发霉问题的房子里...","reasoning":"...","reference_ids":[1,2,3,4,5]}
      ],
      references: [
        {"id":"r1","ref_index":1,"type":"audio","timestamp":"00:05:23","content":"访问者A: ...","source":"音频访谈文件 - 客户访谈记录.mp3"},
        {"id":"r2","ref_index":2,"type":"text","timestamp":null,"content":"在访谈中，客户明确表示对小高层的偏好...","source":"文本记录 - 用户访谈整理.docx"},
        {"id":"r3","ref_index":3,"type":"audio","timestamp":"00:12:45","content":"访问者B: 什么时候开始考虑换房的？...","source":"音频访谈文件 - 客户访谈记录.mp3"},
        {"id":"r4","ref_index":4,"type":"text","timestamp":null,"content":"客户对未来住房问题加剧的担忧主要来自于...","source":"文本记录 - 用户访谈整理.docx"},
        {"id":"r5","ref_index":5,"type":"audio","timestamp":"00:25:10","content":"受访者C: 我们看中的是这个小区的建筑质量...","source":"音频访谈文件 - 客户访谈记录.mp3"}
      ]
    };

    const originalFetch = window.fetch.bind(window);
    window.fetch = async function (input, init) {
      const req = typeof input === 'string' ? new Request(input, init) : input;
      const url = new URL(req.url, window.location.origin);

      if (url.pathname.startsWith('/api')) {
        // Routing
        if (req.method === 'POST' && url.pathname === '/api/analyses') {
          return new Response(JSON.stringify({ data: { id: 'mock-analysis-1', status: 'pending' }, meta: { request_id: 'msw-mock-' + Date.now() }, error: null }), { status: 201, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }
        if (req.method === 'GET' && /^\/api\/analyses\/[^/]+$/.test(url.pathname)) {
          const id = url.pathname.split('/').pop();
          return new Response(JSON.stringify({ data: { id, status: 'completed', analyzed_by: 'D&R' }, meta: { request_id: 'msw-mock-' + Date.now() }, error: null }), { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }
        if (req.method === 'GET' && /^\/api\/analyses\/[^/]+\/full$/.test(url.pathname)) {
          return new Response(JSON.stringify({ data: SAMPLE, meta: { request_id: 'msw-mock-' + Date.now() }, error: null }), { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }
        if (req.method === 'GET' && url.pathname === '/api/projects') {
          return new Response(JSON.stringify({ data: [{
            id: 'p1',
            name: '客户访谈-景高府案例',
            status: 'active',
            last_interview_date: '2025-09-03',
            last_interviewee_name: '张先生',
            last_analysis_status: 'completed'
          }], meta: { request_id: 'msw-mock-' + Date.now() }, error: null }), { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }
        if (req.method === 'GET' && /^\/api\/analyses\/[^/]+\/references$/.test(url.pathname)) {
          return new Response(JSON.stringify({ data: SAMPLE.references, meta: { request_id: 'msw-mock-' + Date.now() }, error: null }), { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // Interviews
        if (req.method === 'POST' && url.pathname === '/api/interviews') {
          return new Response(JSON.stringify({ data: {
            id: 'iv-1',
            project_id: 'p1',
            interviewee_name: '张先生',
            interview_date: '2025-09-03',
            notes: 'mock interview',
            created_at: new Date().toISOString(),
            media: [],
            analysis: { id: 'mock-analysis-1', status: 'completed' }
          }, meta: { request_id: 'msw-mock-' + Date.now() }, error: null }), { status: 201, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }
        if (req.method === 'GET' && /^\/api\/interviews\/[^/]+$/.test(url.pathname)) {
          const iid = url.pathname.split('/').pop();
          return new Response(JSON.stringify({ data: {
            id: iid,
            project_id: 'p1',
            interviewee_name: '张先生',
            interview_date: '2025-09-03',
            notes: 'mock interview detail',
            created_at: new Date().toISOString(),
            media: [{ id: 'm1', type: 'audio', filename: '客户访谈记录.mp3', storage_url: '/mock/audio/客户访谈记录.mp3' }],
            analysis: { id: 'mock-analysis-1', status: 'completed' }
          }, meta: { request_id: 'msw-mock-' + Date.now() }, error: null }), { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // Media upload-init
        if (req.method === 'POST' && url.pathname === '/api/media/upload-init') {
          return new Response(JSON.stringify({ data: {
            upload_url: 'https://mock-storage/upload',
            headers: { 'x-mock-token': 'abc123' },
            storage_url: '/mock/storage/file-1',
            media_id: 'm1'
          }, meta: { request_id: 'msw-mock-' + Date.now() }, error: null }), { status: 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // Default not implemented
        return new Response(JSON.stringify({ data: null, meta: { request_id: 'msw-mock-' + Date.now() }, error: { code: 'NOT_IMPLEMENTED', message: 'MSW stub not implemented for this endpoint' } }), { status: 501, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
      }
      return originalFetch(input, init);
    };

    console.log('[MSW-Stub] fetch interceptor is active');
  } catch (e) {
    console.error('[MSW-Stub] initialization failed', e);
  }
})();