import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Monitor,
  Smartphone,
  Palette,
  Code,
  Search,
  Zap,
  Users,
  Award,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredAnimation } from "@/components/staggered-animation"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
              <Code className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold">WebCraft</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-sm font-medium hover:text-purple-600 transition-colors">
              服務項目
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-purple-600 transition-colors">
              作品集
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-purple-600 transition-colors">
              關於我們
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-purple-600 transition-colors">
              聯繫我們
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              免費諮詢
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" />
          <div className="container relative px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <AnimatedSection animation="fade-right" duration={800}>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <AnimatedSection animation="fade-up" delay={200}>
                      <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-white/50">
                        <Zap className="mr-2 h-4 w-4 text-purple-600" />
                        專業網頁設計團隊
                      </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up" delay={400}>
                      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        打造您的
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {" "}
                          數位品牌
                        </span>
                      </h1>
                    </AnimatedSection>
                    <AnimatedSection animation="fade-up" delay={600}>
                      <p className="text-xl text-muted-foreground max-w-[600px]">
                        我們專精於創造令人驚艷的網站設計，結合創意與技術，為您的品牌打造獨特的數位體驗。
                      </p>
                    </AnimatedSection>
                  </div>

                  <AnimatedSection animation="fade-up" delay={800}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        開始您的專案
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button size="lg" variant="outline">
                        查看作品集
                      </Button>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-up" delay={1000}>
                    <div className="flex items-center space-x-8 pt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">500+</div>
                        <div className="text-sm text-muted-foreground">完成專案</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">98%</div>
                        <div className="text-sm text-muted-foreground">客戶滿意度</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">5年</div>
                        <div className="text-sm text-muted-foreground">專業經驗</div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={400} duration={800}>
                <div className="relative">
                  <div className="relative z-10">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="網頁設計展示"
                      width={800}
                      height={600}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20" />
                  <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl opacity-20" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container px-4">
            <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">我們的專業服務</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                從概念到上線，我們提供全方位的網頁設計與開發服務
              </p>
            </AnimatedSection>

            <StaggeredAnimation className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={150}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>響應式網頁設計</CardTitle>
                  <CardDescription>打造適應各種裝置的現代化網站，確保在桌機、平板、手機上都有完美體驗</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>行動優先設計</CardTitle>
                  <CardDescription>以行動裝置為優先考量的設計理念，提供流暢的手機瀏覽體驗</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>品牌視覺設計</CardTitle>
                  <CardDescription>結合您的品牌特色，創造獨特的視覺識別和使用者介面設計</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>前端開發</CardTitle>
                  <CardDescription>使用最新的前端技術，打造高效能、互動性強的網站功能</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-violet-50 to-purple-50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>SEO 優化</CardTitle>
                  <CardDescription>搜尋引擎優化服務，提升網站在 Google 等搜尋引擎的排名</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-cyan-50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>網站維護</CardTitle>
                  <CardDescription>提供持續的網站維護服務，確保網站安全性和最佳效能</CardDescription>
                </CardHeader>
              </Card>
            </StaggeredAnimation>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 md:py-32 bg-muted/50">
          <div className="container px-4">
            <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">精選作品集</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                探索我們為各行各業客戶打造的成功案例
              </p>
            </AnimatedSection>

            <StaggeredAnimation className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={100}>
              {[
                {
                  title: "時尚品牌官網",
                  category: "電商網站",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "餐廳訂位系統",
                  category: "服務業",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "科技公司形象網站",
                  category: "企業官網",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "藝術家作品展示",
                  category: "作品集網站",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "健身房會員系統",
                  category: "會員制網站",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "教育平台設計",
                  category: "線上學習",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm font-medium">{project.category}</div>
                      <div className="text-lg font-bold">{project.title}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </StaggeredAnimation>

            <AnimatedSection animation="fade-up" className="text-center mt-12">
              <Button size="lg" variant="outline">
                查看更多作品
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <AnimatedSection animation="fade-right" duration={800}>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">關於 WebCraft</h2>
                    <p className="text-xl text-muted-foreground">
                      我們是一支充滿熱忱的網頁設計團隊，致力於為客戶創造卓越的數位體驗。
                    </p>
                  </div>

                  <StaggeredAnimation className="space-y-6" staggerDelay={200}>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">專業團隊</h3>
                        <p className="text-muted-foreground">
                          由資深設計師和開發工程師組成的專業團隊，擁有豐富的實戰經驗。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">品質保證</h3>
                        <p className="text-muted-foreground">嚴格的品質控制流程，確保每個專案都達到最高標準。</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">快速交付</h3>
                        <p className="text-muted-foreground">高效的工作流程，在保證品質的前提下快速完成專案交付。</p>
                      </div>
                    </div>
                  </StaggeredAnimation>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={400} duration={800}>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="團隊工作照"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-muted/50">
          <div className="container px-4">
            <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">客戶好評</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">聽聽我們的客戶怎麼說</p>
            </AnimatedSection>

            <StaggeredAnimation className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={200}>
              {[
                {
                  name: "張小明",
                  company: "時尚品牌創辦人",
                  content: "WebCraft 團隊完全理解我們的品牌理念，設計出來的網站超乎我們的期待！",
                  rating: 5,
                },
                {
                  name: "李美華",
                  company: "餐廳老闆",
                  content: "新的訂位系統讓我們的營運效率大幅提升，客戶反應也非常好。",
                  rating: 5,
                },
                {
                  name: "王大偉",
                  company: "科技公司執行長",
                  content: "專業、準時、品質優秀，是我們長期合作的最佳夥伴。",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredAnimation>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container px-4">
            <AnimatedSection animation="fade-up" className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">聯繫我們</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                準備開始您的專案了嗎？讓我們來幫助您實現數位夢想
              </p>
            </AnimatedSection>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <AnimatedSection animation="fade-right" duration={800}>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">電子郵件</div>
                        <div className="text-muted-foreground">hello@webcraft.com</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">電話</div>
                        <div className="text-muted-foreground">+886 2 1234 5678</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">地址</div>
                        <div className="text-muted-foreground">台北市信義區信義路五段7號</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={200} duration={800}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>免費諮詢</CardTitle>
                    <CardDescription>填寫表單，我們將在24小時內與您聯繫</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">姓名</label>
                        <Input placeholder="請輸入您的姓名" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">公司</label>
                        <Input placeholder="請輸入公司名稱" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">電子郵件</label>
                      <Input type="email" placeholder="請輸入您的電子郵件" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">專案需求</label>
                      <Textarea placeholder="請描述您的專案需求..." className="min-h-[120px]" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      送出諮詢
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">WebCraft</span>
              </div>
              <p className="text-muted-foreground">專業網頁設計公司，為您打造卓越的數位體驗。</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">服務項目</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    網頁設計
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    前端開發
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    SEO 優化
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    網站維護
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">公司資訊</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    關於我們
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    作品集
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    客戶見證
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    聯繫我們
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">聯繫資訊</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@webcraft.com</li>
                <li>+886 2 1234 5678</li>
                <li>台北市信義區信義路五段7號</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} WebCraft. 版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
