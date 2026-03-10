"use client";

import { useState } from "react";
import Image from "next/image";
import { Loader2, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: ""
  });

  const TENANT_ID = "660e8400-e29b-41d4-a716-446655440004";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.from('leads').insert({
        tenant_id: TENANT_ID,
        name: formData.nome,
        phone: formData.whatsapp,
        email: formData.email,
        status: 'NOVO'
      });

      if (error) throw error;
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">fitness_center</span>
              <h2 className="text-xl font-bold tracking-tight">PRO<span className="text-primary">TRAINER</span></h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#sobre">Sobre</a>
              <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#resultados">Resultados</a>
              <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#servicos">Serviços</a>
              <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#faq">FAQ</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="bg-primary text-background-dark px-6 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                Agendar Agora
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-8 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit">
                  <span className="material-symbols-outlined text-sm">verified</span> Resultados comprovados
                </div>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
                  Transforme seu corpo com <span className="text-primary italic">acompanhamento</span> profissional
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Alcance sua melhor versão com treinos sob medida e suporte constante. Resultados reais para homens que buscam performance e saúde.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary text-background-dark px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/25">
                    Agendar avaliação gratuita
                  </button>
                  <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined">chat</span> Falar no WhatsApp
                  </button>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-background-dark overflow-hidden">
                        <Image
                          src={`https://i.pravatar.cc/150?u=${i + 10}`}
                          alt="Avatar"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-primary">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="material-symbols-outlined fill-1">star</span>
                      ))}
                    </div>
                    <span className="text-sm text-slate-400 font-medium">4.9/5 de 200+ alunos</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                  <Image
                    src="/personal_trainer/hero.png"
                    alt="Personal Trainer Masculino"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white/5" id="sobre">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/personal_trainer/about.png"
                  alt="Sobre o Personal Trainer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 flex flex-col gap-6">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Minha Trajetória</h2>
                <h3 className="text-4xl font-bold leading-tight">Autoridade em Performance e Saúde</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Com mais de 10 anos de experiência no mercado fitness, ajudei centenas de homens a recuperarem sua autoestima e saúde através de métodos cientificamente comprovados.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-background-dark border border-white/5 flex items-start gap-3 text-white">
                    <span className="material-symbols-outlined text-primary">workspace_premium</span>
                    <div>
                      <h4 className="font-bold">Certificação Internacional</h4>
                      <p className="text-sm text-slate-500">Fisiologia do Exercício Avançada</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-background-dark border border-white/5 flex items-start gap-3 text-white">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    <div>
                      <h4 className="font-bold">+200 Alunos</h4>
                      <p className="text-sm text-slate-500">Transformações reais comprovadas</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary">fitness_center</span>
                    <span className="font-medium text-slate-200 uppercase tracking-wide">Treino Personalizado</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary">support_agent</span>
                    <span className="font-medium text-slate-200 uppercase tracking-wide">Acompanhamento Individual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que treinar comigo?</h2>
            <p className="text-slate-400">Muito além da estética, entregamos qualidade de vida e força.</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard icon="monitor_weight" title="Emagrecimento" desc="Protocolos focados em queima calórica e aceleração metabólica." />
            <BenefitCard icon="exercise" title="Ganho de Massa" desc="Hipertrofia estratégica com periodização de cargas para máxima força." />
            <BenefitCard icon="accessibility_new" title="Postura" desc="Fortalecimento do core e correção de desequilíbrios para performance." />
            <BenefitCard icon="bolt" title="Disposição" desc="Melhora do condicionamento físico para os desafios do seu dia a dia." />
          </div>
        </section>

        {/* Testimonials / Results */}
        <section className="py-24 bg-primary/5" id="resultados">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 italic underline decoration-primary underline-offset-8">Transformações Reais</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ResultCard
                name="Ricardo S."
                result="-12kg em 4 meses"
                comment="A metodologia mudou minha relação com o treino. Hoje tenho prazer em me exercitar e bater minhas metas."
                imageBefore="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400"
                imageAfter="https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=400"
              />
              <ResultCard
                name="André M."
                result="+8kg de Massa"
                comment="Sempre tive dificuldade em ganhar peso. O plano de hipertrofia focado em carga foi cirúrgico e eficiente."
                imageBefore="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400"
                imageAfter="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400"
              />
              <ResultCard
                name="Carlos T."
                result="Foco em Performance"
                comment="Melhorei meus tempos na corrida e acabei com as dores que me limitavam. Outro nível de vida."
                imageBefore="https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=400"
                imageAfter="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=400"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24" id="servicos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Escolha sua Modalidade</h2>
              <p className="text-slate-400">Temos o plano ideal para a sua rotina e objetivos específicos.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="Presencial"
                desc="Acompanhamento de perto em academia ou condomínio. Correção instantânea de movimentos."
                features={["Foco total na execução", "Material incluso", "Periodização presencial"]}
              />
              <ServiceCard
                title="Online (Personal)"
                desc="Treino ao vivo via vídeo-chamada. Onde você estiver, com a mesma qualidade do presencial."
                features={["Liberdade geográfica", "Gravação das aulas", "Correção via vídeo"]}
                popular
              />
              <ServiceCard
                title="Consultoria"
                desc="Planilha de treinos personalizada via App + suporte via WhatsApp para tirar dúvidas."
                features={["Treine no seu horário", "App exclusivo", "Feedback semanal"]}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/10 -skew-y-3"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-background-dark border border-primary/30 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Agende sua primeira avaliação <span className="text-primary italic">totalmente gratuita</span></h2>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
                <CTAListItem icon="analytics" text="Análise de composição corporal" />
                <CTAListItem icon="target" text="Definição de metas realistas" />
                <CTAListItem icon="calendar_today" text="Planejamento de rotina" />
                <CTAListItem icon="check_circle" text="Sem compromisso inicial" />
              </div>
              <div className="max-w-xl mx-auto">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Solicitação Enviada!</h3>
                    <p className="text-slate-400 mb-8">Entraremos em contato em breve para sua avaliação.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-slate-300">Nome Completo</label>
                      <input
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-primary focus:border-primary"
                        placeholder="Seu nome"
                        type="text"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-slate-300">WhatsApp</label>
                        <input
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-primary focus:border-primary"
                          placeholder="(00) 00000-0000"
                          type="tel"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-slate-300">Email</label>
                        <input
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-primary focus:border-primary"
                          placeholder="seu@email.com"
                          type="email"
                        />
                      </div>
                    </div>
                    <button
                      disabled={isLoading}
                      className="w-full py-5 bg-primary text-background-dark text-xl font-black rounded-2xl shadow-2xl shadow-primary/40 uppercase tracking-tighter hover:scale-105 transition-all flex items-center justify-center gap-2"
                      type="submit"
                    >
                      {isLoading ? (
                        <>
                          Enviando...
                          <Loader2 className="w-6 h-6 animate-spin" />
                        </>
                      ) : (
                        "Quero começar agora"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white/5" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-4">
              <FAQItem
                question="Preciso já estar treinando para começar?"
                answer="Absolutamente não! Atendo desde iniciantes que nunca pisaram numa academia até atletas de alto rendimento. O plano é adaptado ao seu nível atual."
              />
              <FAQItem
                question="Como funciona o acompanhamento online?"
                answer="Fazemos chamadas de vídeo em tempo real onde eu acompanho toda a sua execução, cronometro os intervalos e te motivo como se estivéssemos lado a lado."
              />
              <FAQItem
                question="Quanto tempo demora para ver resultados?"
                answer="Nas primeiras 4 semanas você já sentirá melhora na disposição e sono. Resultados estéticos visíveis costumam aparecer entre 8 e 12 semanas de consistência."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">fitness_center</span>
              <h2 className="text-lg font-bold tracking-tight text-white">PRO<span className="text-primary">TRAINER</span></h2>
            </div>
            <div className="flex gap-6">
              <span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">Instagram</span>
              <span className="text-slate-500 hover:text-primary transition-colors cursor-pointer">WhatsApp</span>
            </div>
            <div className="text-sm text-slate-500">
              © 2024 ProTrainer. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all text-center group">
      <span className="material-symbols-outlined text-5xl text-primary mb-6 group-hover:scale-110 transition-transform block">{icon}</span>
      <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}

function ResultCard({ name, result, comment, imageBefore, imageAfter }: { name: string, result: string, comment: string, imageBefore: string, imageAfter: string }) {
  return (
    <div className="bg-background-dark rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
      <div className="grid grid-cols-2 bg-slate-800 h-64 relative">
        <Image src={imageBefore} alt="Antes" fill className="object-cover grayscale opacity-60 transition-opacity group-hover:opacity-100" />
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="border-r border-white/20"></div>
          <Image src={imageAfter} alt="Depois" fill className="object-cover !left-1/2 !w-1/2" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-1 text-primary mb-2">
          {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-xs fill-1">star</span>)}
        </div>
        <h4 className="font-bold text-lg mb-2 text-white">{name}, <span className="text-primary">{result}</span></h4>
        <p className="text-slate-400 text-sm italic">"{comment}"</p>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, features, popular = false }: { title: string, desc: string, features: string[], popular?: boolean }) {
  return (
    <div className={`relative p-8 rounded-3xl border transition-all flex flex-col h-full ${popular ? 'bg-primary text-background-dark shadow-2xl shadow-primary/20 scale-105 z-10 border-primary' : 'bg-white/5 border-white/10 hover:border-primary'}`}>
      {popular && <div className="absolute top-4 right-4 bg-background-dark text-primary px-3 py-1 rounded-full text-xs font-bold">MAIS POPULAR</div>}
      <h3 className={`text-2xl font-bold mb-4 ${popular ? 'text-background-dark' : 'text-white'}`}>{title}</h3>
      <p className={`mb-8 flex-grow ${popular ? 'text-background-dark/80' : 'text-slate-400'}`}>{desc}</p>
      <ul className="mb-8 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span className={`material-symbols-outlined text-sm ${popular ? 'text-background-dark' : 'text-primary'}`}>check_circle</span>
            <span className={popular ? 'font-semibold' : ''}>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 font-bold rounded-xl transition-all ${popular ? 'bg-background-dark text-primary hover:brightness-125' : 'border border-primary text-primary hover:bg-primary hover:text-background-dark'}`}>
        Quero saber mais
      </button>
    </div>
  );
}

function CTAListItem({ icon, text }: { icon: string, text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary">{icon}</span>
      <span className="text-slate-200">{text}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <details className="group bg-background-dark rounded-xl border border-white/10 overflow-hidden">
      <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-white">
        {question}
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
      </summary>
      <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
