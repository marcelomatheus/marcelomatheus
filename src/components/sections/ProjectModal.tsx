import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { ProjectModalProps } from "../interfaces/sections";

export function ProjectModal({ project, copy, onClose, commonClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="noise-card relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#111111]/95 p-8 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="absolute right-4 top-4 text-muted" onClick={onClose} aria-label={commonClose}>
              <X className="h-5 w-5" />
            </button>
            <div className="grid gap-8 md:grid-cols-[3fr_2fr]">
              <div>
                <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.excerpt}</p>
                <div className="mt-6 space-y-4 text-sm text-muted">
                  <div>
                    <h4 className="text-base font-semibold text-white">{copy.what}</h4>
                    <p className="mt-2">{project.overview}</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">{copy.problem}</h4>
                    <p className="mt-2">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">{copy.metrics}</h4>
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      {project.impact.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">{copy.stack}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface p-4">
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>GitHub</span>
                    <span className="flex items-center gap-2 text-white">
                      <Github className="h-4 w-4" />
                      {project.github.language}
                    </span>
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-muted">
                    <span>⭐ {project.github.stars}</span>
                    <span>🍴 {project.github.forks}</span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(project.links.repo, "_blank", "noreferrer")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {copy.repoCta}
                    </Button>
                    <Button
                      className="w-full"
                      onClick={() => window.open(project.links.live, "_blank", "noreferrer")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {copy.liveCta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
