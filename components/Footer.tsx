import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-apple-border/30 bg-apple-bg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site description */}
          <div>
            <h3 className="text-lg font-bold text-apple-text mb-3">
              <span className="text-apple-text">Auto</span>
              <span className="text-apple-accent">News</span>
            </h3>
            <p className="text-sm text-apple-secondary leading-relaxed max-w-xs">
              为您提供最新、最全面的汽车行业资讯，涵盖新车发布、技术前沿、试驾评测等领域。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-apple-text mb-3">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/?cat=newcar" className="text-sm text-apple-secondary hover:text-apple-accent transition-colors">
                  新车发布
                </Link>
              </li>
              <li>
                <Link href="/?cat=tech" className="text-sm text-apple-secondary hover:text-apple-accent transition-colors">
                  技术前沿
                </Link>
              </li>
              <li>
                <Link href="/?cat=review" className="text-sm text-apple-secondary hover:text-apple-accent transition-colors">
                  试驾评测
                </Link>
              </li>
              <li>
                <Link href="/?cat=ev" className="text-sm text-apple-secondary hover:text-apple-accent transition-colors">
                  新能源
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow us / Social */}
          <div>
            <h4 className="text-sm font-semibold text-apple-text mb-3">关注我们</h4>
            <div className="flex gap-4">
              {/* WeChat */}
              <div
                className="w-10 h-10 rounded-full bg-apple-border/30 flex items-center justify-center text-apple-secondary hover:bg-apple-accent hover:text-white transition-colors cursor-pointer"
                title="微信"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.11.24-.245 0-.06-.024-.12-.04-.178l-.324-1.233a.49.49 0 0 1 .178-.554C23.028 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.18 2.946c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.36 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z" />
                </svg>
              </div>

              {/* Weibo */}
              <div
                className="w-10 h-10 rounded-full bg-apple-border/30 flex items-center justify-center text-apple-secondary hover:bg-apple-accent hover:text-white transition-colors cursor-pointer"
                title="微博"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM13.514 3.078c7.027.822 10.983 5.98 8.822 11.454l.005-.013c-.584 1.478-1.568 2.796-2.853 3.787l.002-.001c-.93-2.259-2.973-4.123-5.884-5.311-2.934-1.197-6.179-1.526-8.941-.861a8.364 8.364 0 0 1-.232-1.814l-.002-.026c-.001-5.166 4.647-9.413 11.083-8.036v-.007zm1.099 1.275c-4.218-.698-8.006 1.34-8.468 4.557-.085.593.181 1.165.712 1.679l-.003-.003c1.199-1.661 3.206-2.83 5.575-3.323 2.441-.508 4.757-.18 6.348.787 1.485-1.583 2.072-3.249 1.051-4.283-.884-.942-2.651-1.066-5.215-.417v.003zm.578 1.287c.45-.097.907.166 1.019.59.112.421-.166.846-.621.943-.45.097-.908-.166-1.02-.59-.112-.424.165-.848.622-.943z" />
                </svg>
              </div>

              {/* Twitter / X */}
              <div
                className="w-10 h-10 rounded-full bg-apple-border/30 flex items-center justify-center text-apple-secondary hover:bg-apple-accent hover:text-white transition-colors cursor-pointer"
                title="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-apple-border/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-apple-secondary">
            &copy; 2026 AutoNews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
