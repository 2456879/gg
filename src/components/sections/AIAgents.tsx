import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { BrainCircuit, MessageCircle, Sparkles, Network, ArrowRight } from 'lucide-react';

const AIAgents: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const chatStartedRef = useRef(false);
  const [currentConversationId, setCurrentConversationId] = useState(0);
  
  type Message = {
    id: number;
    text: string;
    sender: 'ai' | 'user';
  };

  const conversations: Message[][] = [
    [
      {
        id: 1,
        text: "Olá! Sou um agente especializado da Fortexis I.A. Como posso transformar seu negócio hoje?",
        sender: 'ai'
      },
      {
        id: 2,
        text: "Preciso automatizar meu atendimento ao cliente",
        sender: 'user'
      },
      {
        id: 3,
        text: "Perfeito! Criamos agentes humanizados que atendem 24/7 com a personalidade da sua marca. Reduzimos custos em 70% e aumentamos satisfação!",
        sender: 'ai'
      },
      {
        id: 4,
        text: "Isso é exatamente o que preciso! Como funciona?",
        sender: 'user'
      },
      {
        id: 5,
        text: "Implementamos em 3 etapas: diagnóstico, desenvolvimento e otimização. Quer agendar uma demonstração gratuita?",
        sender: 'ai'
      }
    ],
    [
      {
        id: 1,
        text: "Oi! Sou especialista em automação comercial da Fortexis I.A. Em que posso ajudar?",
        sender: 'ai'
      },
      {
        id: 2,
        text: "Quero aumentar minhas vendas com IA",
        sender: 'user'
      },
      {
        id: 3,
        text: "Excelente! Nossos agentes qualificam leads, fazem follow-up e recuperam vendas perdidas automaticamente. ROI de 300% em média!",
        sender: 'ai'
      },
      {
        id: 4,
        text: "Quanto tempo leva para implementar?",
        sender: 'user'
      },
      {
        id: 5,
        text: "Entre 2-4 semanas para estar 100% operacional. Começamos com um piloto em 1 semana. Quer conhecer nossos cases?",
        sender: 'ai'
      }
    ],
    [
      {
        id: 1,
        text: "Olá! Especialista em integração de sistemas da Fortexis I.A. Como posso auxiliar?",
        sender: 'ai'
      },
      {
        id: 2,
        text: "Preciso integrar meus sistemas com IA",
        sender: 'user'
      },
      {
        id: 3,
        text: "Conectamos todos os seus sistemas com IA inteligente. Fluxos automatizados que economizam 85% do tempo e reduzem erros!",
        sender: 'ai'
      },
      {
        id: 4,
        text: "E se eu já tenho sistemas legados?",
        sender: 'user'
      },
      {
        id: 5,
        text: "Sem problema! Somos especialistas em integrar sistemas antigos com IA moderna. Fazemos a ponte perfeita!",
        sender: 'ai'
      }
    ]
  ];

  const [messages, setMessages] = useState<Message[]>([]);
  
  // Auto-scroll function
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Effect to auto-scroll when messages change
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages]);

  // Effect to scroll when typing indicator appears
  useEffect(() => {
    if (isTyping) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isTyping]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            if (!chatStartedRef.current) {
              startChat();
              chatStartedRef.current = true;
            }
          } else {
            // Reset chat when component is out of view
            setMessages([]);
            chatStartedRef.current = false;
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startChat = () => {
    const conversation = conversations[currentConversationId];
    let currentIndex = 0;
    
    const addMessage = () => {
      if (currentIndex < conversation.length) {
        setIsTyping(true);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, conversation[currentIndex]]);
          currentIndex++;
          
          if (currentIndex < conversation.length) {
            setTimeout(addMessage, 1500);
          } else {
            // Auto restart with next conversation after delay
            setTimeout(() => {
              setMessages([]);
              setCurrentConversationId(prev => (prev + 1) % conversations.length);
              chatStartedRef.current = false;
              // Only restart if still in view
              if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                  setTimeout(startChat, 1000);
                }
              }
            }, 4000);
          }
        }, conversation[currentIndex].sender === 'ai' ? 2500 : 1200);
      }
    };
    
    addMessage();
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
                <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Agentes Inteligentes
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Agentes de IA que <GradientText>Pensam e Agem</GradientText> Como Humanos
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Desenvolvemos agentes de IA com uma camada exclusiva de humanização, 
                capazes de interagir com seus clientes e colaboradores de forma natural e empática.
              </p>
              
              <div className="space-y-6 mb-8">
                <FeatureItem 
                  icon={<BrainCircuit size={20} />} 
                  title="Raciocínio avançado"
                  description="Nossos agentes analisam contexto, histórico e intenções para tomar decisões inteligentes."
                />
                <FeatureItem 
                  icon={<MessageCircle size={20} />} 
                  title="Comunicação natural"
                  description="Conversas fluidas que respeitam o tom de voz da sua marca e conectam com seu público."
                />
                <FeatureItem 
                  icon={<Sparkles size={20} />} 
                  title="Personalidade definida"
                  description="Cada agente possui características e traços que refletem os valores da sua empresa."
                />
                <FeatureItem 
                  icon={<Network size={20} />} 
                  title="Integração perfeita"
                  description="Projetados para se encaixar perfeitamente nos processos existentes do seu negócio."
                />
              </div>
              
              <a 
                href="#apply" 
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300"
              >
                <span className="text-white/90 group-hover:text-white transition-colors">
                  Conheça mais sobre nossos agentes
                </span>
                <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/8438969/pexels-photo-8438969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="AI agent visualization" 
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"></div>
                  
                  {/* Chat interface */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8">
                    <div className="bg-dark-800/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 border border-dark-700/50">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                          <BrainCircuit size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white text-sm sm:text-base">Agente IA</h4>
                          <p className="text-xs text-white/60 hidden sm:block">Fortexis I.A</p>
                        </div>
                      </div>
                      <div 
                        ref={chatContainerRef}
                        className="space-y-2 sm:space-y-3 max-h-32 sm:max-h-40 md:max-h-48 overflow-y-auto scroll-smooth"
                      >
                        {messages && messages.map((message) => (
                          message && (
                            <div
                              key={message.id}
                              className={`${
                                message.sender === 'ai'
                                  ? 'bg-primary-500/10 border border-primary-500/20 mr-4'
                                  : 'bg-dark-700/30 border border-dark-600/20 ml-4'
                              } p-2 sm:p-3 rounded-lg animate-fade-in`}
                            >
                              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{message.text}</p>
                            </div>
                          )
                        ))}
                        {isTyping && (
                          <div className="bg-primary-500/10 p-2 sm:p-3 rounded-lg mr-4 border border-primary-500/20">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
};

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-dark-800/50 transition-colors duration-300">
      <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-2 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AIAgents;