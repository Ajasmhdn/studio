
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CodeBlock } from "@/components/code-block";

export function HpcSection() {
  return (
    <section id="hpc" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            High Performance Computing Facility
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            To avail HPC facility, block slots through:{" "}
            <a
              href="http://bit.ly/TKMVega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              http://bit.ly/TKMVega
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://placehold.co/600x400.png"
              alt="HPC Facility"
              fill
              className="object-cover"
              data-ai-hint="server room data center"
            />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The center is furnished with high computing laboratory facilities costing more than 50 lakhs.
          </p>
        </div>

        <div className="mb-16">
            <h3 className="text-2xl font-bold font-headline mb-6 text-center">Server Details</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Vega 1 (Server 1)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p><strong>Processor:</strong> 2 × Intel Xeon Gold 5220 2.2G, 18C/36T, 24.75M Cache</p>
                        <p><strong>Graphics Card:</strong> 2 × NVIDIA Tesla V100 16G Passive GPU</p>
                        <p><strong>Hard Drives:</strong> 4 × 1.2TB 10K RPM SAS 12Gbps</p>
                        <p><strong>Memory:</strong> 6 × 32GB RDIMM, 3200MT/s, Dual Rank</p>
                        <p><strong>OS:</strong> Ubuntu 18.04.05 LTS</p>
                        <p><strong>Applications:</strong> Docker (Containers: TensorFlow, MXNet, PyTorch)</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Vega 2 (Server 2)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p><strong>Processor:</strong> 2 × Intel Xeon Gold 5220 2.2G, 18C/36T, 24.75M Cache</p>
                        <p><strong>Graphics Card:</strong> 2 × NVIDIA Tesla V100 16G Passive GPU</p>
                        <p><strong>Hard Drives:</strong> 4 × 1.2TB 10K RPM SAS 12Gbps</p>
                        <p><strong>Memory:</strong> 6 × 32GB RDIMM, 3200MT/s, Dual Rank</p>
                        <p><strong>OS:</strong> Ubuntu 21.04 LTS (GUI Enabled)</p>
                        <p><strong>Applications:</strong> Keras, TensorFlow, Jupyter Notebook</p>
                    </CardContent>
                </Card>
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
             <div className="relative aspect-video rounded-lg overflow-hidden md:order-2">
                <Image
                src="https://placehold.co/600x400.png"
                alt="Desktop Lab"
                fill
                className="object-cover"
                data-ai-hint="computer lab students"
                />
            </div>
            <div className="md:order-1">
                <h3 className="text-2xl font-bold font-headline mb-4">Desktop & Developer Kits</h3>
                <Card>
                    <CardContent className="pt-6 space-y-2 text-muted-foreground">
                        <p><strong>Desktops:</strong> 20 × OptiPlex 3070 SFF</p>
                        <p><strong>Processor:</strong> Intel Core i7-9700 (8 cores)</p>
                        <p><strong>Memory:</strong> 16GB DDR4</p>
                        <p><strong>Developer Kits:</strong> Jetson Nano (2), Jetson TX2 (2)</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div>
            <h3 className="text-2xl font-bold font-headline mb-6 text-center">Remote Access Guide</h3>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                <AccordionItem value="step1">
                    <AccordionTrigger>1. Connect to the Remote Server</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                        <p>Open Command Prompt (Windows) or Terminal (Ubuntu), then run:</p>
                        <CodeBlock>ssh -L &lt;port_number&gt;:localhost:&lt;port_number&gt; user@172.20.33.92</CodeBlock>
                        <p>Example:</p>
                        <CodeBlock>ssh -L 8089:localhost:8089 user@172.20.33.92</CodeBlock>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step2">
                    <AccordionTrigger>2. If You Already Have a Conda Environment</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                        <p>Activate your environment:</p>
                        <CodeBlock>conda activate &lt;your_name&gt;</CodeBlock>
                        <p>Example:</p>
                        <CodeBlock>conda activate sumod</CodeBlock>
                        <p>Start Jupyter Notebook:</p>
                        <CodeBlock>jupyter notebook --no-browser --port=&lt;same_port_number&gt;</CodeBlock>
                        <p>Example:</p>
                        <CodeBlock>jupyter notebook --no-browser --port=8089</CodeBlock>
                        <p>Upload files and run your code.</p>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="step3">
                    <AccordionTrigger>3. If You Need to Create a New Conda Environment</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                        <p>Create environment:</p>
                        <CodeBlock>conda create --name &lt;your_name&gt; python=3.9</CodeBlock>
                        <p>Example:</p>
                        <CodeBlock>conda create --name sumod python=3.9</CodeBlock>
                        <p>Load Conda:</p>
                        <CodeBlock>source ~/anaconda3/etc/profile.d/conda.sh</CodeBlock>
                        <p>Activate environment:</p>
                        <CodeBlock>conda activate &lt;your_name&gt;</CodeBlock>
                         <p>Example:</p>
                        <CodeBlock>conda activate sumod</CodeBlock>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step4">
                    <AccordionTrigger>4. Install Required Dependencies</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                        <CodeBlock>conda install -c conda-forge cudatoolkit=11.8.0</CodeBlock>
                        <CodeBlock>pip install nvidia-cudnn-cu11==8.6.0.163</CodeBlock>
                        <CodeBlock>pip install --upgrade pip</CodeBlock>
                        <CodeBlock>pip install tensorflow==2.13.*</CodeBlock>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="step5">
                    <AccordionTrigger>5. Start Jupyter Notebook</AccordionTrigger>
                    <AccordionContent className="space-y-4">
                        <CodeBlock>jupyter notebook --no-browser --port=&lt;same_port_number&gt;</CodeBlock>
                        <p>Example:</p>
                        <CodeBlock>jupyter notebook --no-browser --port=8089</CodeBlock>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

      </div>
    </section>
  );
}
